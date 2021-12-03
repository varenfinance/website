import { useRef, useLayoutEffect, useState } from 'react';
import { settings } from '../settings';

export const Description = () => {
  const [position, setPosition] = useState<DOMRect | null>(null);
  const firstCard = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(firstCard.current?.getBoundingClientRect() ?? null);
    }
    window.addEventListener('resize', updatePosition);
    updatePosition();
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  return (
    <div className={'description-container' + settings.boxCss}>
      <div className='social-links flex xs:flex-col mb-10 items-center sm:flex md:hidden xs:mt-14'>
        <div className='flex flex-row justify-between gap-3 w-full'>
          {settings.links.social.map((link, index) => (
            <a
              className='flex gap-2 items-center ml-auto'
              href={link.link}
              target='_blank'
              rel='noreferrer'
              key={`social-links-${index}`}
            >
              {link.leftElement && link.leftElement}
              <img className='w-8 h-8 xs:w-6 xs:h-6 md:w-8 md:h-8 ' src={link.path} alt={link.path} />
              {link.rightElement && link.rightElement}
            </a>
          ))}
        </div>
      </div>
      <div className='card-container flex flex-col relative xs:mt-20 md:mt-28 lg:mt-40'>
        <div className='flex flex-col gap-5 justify-between max-w-2xl'>
          <img
            src={settings.description.varenXLogo}
            alt='varenX'
            className='varenXLogo'
            style={{
              position: 'relative',
              // left: `${position?.left ? position.left - 20 : 0}px`,
              top: `-20px`,
            }}
          />
        </div>
        {settings.description.cards.map((card, index) => (
          <div
            key={`description-card-${index}`}
            className={
              'flex gap-10 justify-between xs:flex-col-reverse lg:flex-row ' +
              (index % 2 === 0 ? '' : 'flex-row-reverse lg:flex-row-reverse xl:mt-28 md:mt-24 xs:mt-12')
            }
          >
            <img className='card-image' src={card.image} alt='card' ref={index === 0 ? firstCard : null} />
            <div className='flex flex-col gap-5 justify-start max-w-2xl'>
              <div className={card.title.class ?? ''}>{card.title.text}</div>
              <div className={card.description.class ?? ''}>{card.description.text}</div>
              <div className={`p-2 ${card.button.class ?? ''} rounded-sm w-36`}>
                <a target='_blank' rel='noreferrer' href={card.button.link}>
                  {card.button.text}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='swap-container m-auto xl:mt-44 md:mt-40 xs:mt-24'>
        <div className='flex flex-row gap-5 justify-around'>
          {settings.swap.map((swap, index) => (
            <img key={`swap-${index}`} src={swap.image} alt='swap' className='swap-image' />
          ))}
        </div>
        <div className='font-avenir text-gold text-base text-center xl:mt-11 md:mt-9 xs:mt-6 lg:mb-64 xs:mb-24'>
          Swap between BTC, BCH, DGB, DOGE, ETH, FIL, LUNA, ZEC and almost all ERC-20 tokens
        </div>
      </div>
    </div>
  );
};
