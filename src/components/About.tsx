import { settings } from '../settings';
import Horse from '../assets/images/horse.webp';
import ShipSVG from '../assets/svg/ship.svg';

export const About = () => {
  return (
    <div className='about-container relative'>
      <img className='nft' src={Horse} alt='NFT' />
      <div className={'text-white text-center'}>
        <div className='heading-container p-5'>
          <div className={'heading ' + settings.About.about.heading_first.class ?? ''}>
            {settings.About.about.heading_first.title}
          </div>
          <div className={'heading ' + settings.About.about.heading_second.class ?? ''}>
            {settings.About.about.heading_second.title}
          </div>
          <div className={'sub-heading lg:mt-7 md:mt-2 xs:mt-3 ' + settings.About.about.sub_heading.class ?? ''}>
            {settings.About.about.sub_heading.title}
          </div>
        </div>
      </div>

      <div className='discord-card rounded flex items-center justify-around bg-white  m-auto absolute md:p-7 xs:p-3 left-0 right-0 lg:bottom-24 md:bottom-20 xs:bottom-5  xs:m-auto md:gap-12 xs:gap-6'>
        <div className='flex flex-col md:w-80 xs:w-64'>
          <div className={settings.About.discord.title.class ?? ''}>{settings.About.discord.title.text}</div>
          <div className={settings.About.discord.description.class ?? ''}>
            {settings.About.discord.description.text}
          </div>
        </div>

        <div className={'rounded-sm md:w-52 xs:w-28'}>
          <a
            target='_blank'
            rel='noreferrer'
            href={settings.About.discord.button.link}
            className={settings.About.discord.button.class}
          >
            <div className='flex gap-2 justify-center items-center md:p-3 xs:p-1'>
              {settings.About.discord.button.leftElement && (
                <img src={settings.About.discord.button.leftElement} alt='Discord-face' />
              )}
              <span className='xs:text-f10px md:text-f18px'>{settings.About.discord.button.text}</span>
            </div>
          </a>
        </div>
      </div>
      {/* <div className={'absolute right-0 bottom-0 lg:bottom-24 md:bottom-20 xs:bottom-28' + settings.boxCss}>
        <a className='flex items-center ml-auto' href={'/'} target='_blank' rel='noreferrer'>
          <img className='md:w-12 md:h-12 xs:w-8 xs:h-8' src={ShipSVG} alt={'nft'} />
        </a>
      </div>*/}
    </div>
  );
};
