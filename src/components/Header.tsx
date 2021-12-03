import { useState } from 'react';
import { settings } from '../settings';
import fullLogo from '../assets/svg/fullLogo.svg';
import hamburger from '../assets/svg/hamburger.svg';
import close from '../assets/svg/close.svg';

type Props = {
  isOpen: boolean;
  setIsOpen: Function;
};

function Header(props: Props) {
  const { isOpen, setIsOpen } = props;
  const [animatedClass, setAnimatedClass] = useState('animate-fadeI');

  const handleClick = () => {
    setAnimatedClass(!isOpen ? 'animate-fadeI' : 'animate-fadeO');
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 150);
  };

  return (
    <div className={'flex justify-between gap-6 z-50 relative ' + settings.boxCss}>
      <img src={fullLogo} alt='fullLogo' />
      <div className='font-avenir flex-shrink hidden items-center justify-start text-sm rounded bg-transparent text-gold  md:text-xs md:flex'>
        {settings.navlinks.map((links) => (
          <div key={links.title} className={`p-3 h-11 ${links.class}`}>
            <a
              target='_blank'
              rel='noreferrer'
              href={links.link}
              style={{ display: 'block' }}
            >
              {links.title}
            </a>
          </div>
        ))}
      </div>
      <div className='hidden xs:block md:hidden z-20 cursor-pointer' onClick={() => handleClick()}>
        <img src={isOpen ? close : hamburger} alt='hamburger' className={animatedClass} />
      </div>
      {isOpen && (
        <div className={'dropdown absolute z-10 text-white left-0 w-full shadow-md ' + animatedClass}>
          <div>
            <img src={fullLogo} alt='fullLogo' className='pl-4' />
          </div>
          <div className='nav-links flex flex-col justify-center'>
            <div>
              {settings.navlinks
                .filter((x) => x.title !== 'Launch App')
                .map((links) => (
                  <div key={links.title} className='p-5'>
                    <a target='_blank' rel='noreferrer' href={links.link} className='text-f20px'>
                      {links.title}
                    </a>
                  </div>
                ))}
            </div>
            <div className='crypto-links flex gap-5 mt-10 flex-row-reverse w-52 ml-5'>
              {settings.links.crypto.map((link, index) => (
                <a
                  className='flex gap-2 items-center mr-auto w-6 h-6'
                  href={link.link}
                  target='_blank'
                  rel='noreferrer'
                  key={`crypto-links-${index}`}
                >
                  {link.leftElement && link.leftElement}
                  <img className='w-8 h-8' src={link.path} alt={link.path} />
                  {link.rightElement && link.rightElement}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
