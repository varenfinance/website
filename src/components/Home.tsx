import Header from './Header';
import { settings } from '../settings';
import NFT from '../assets/images/nft.webp';
import ShipSVG from '../assets/svg/ship.svg';

type Props = {
  isOpen: boolean;
  setIsOpen: Function;
};

export const Home = (props: Props) => {
  return (
    <div className={'home-container'}>
      <img className='nft' src={NFT} alt='NFT' />
      <Header {...props} />
      <div className='main-container text-white left-0 right-0 text-center'>
        <div className='heading-container'>
          <div>
            <img src={settings.homeIntro} alt='home-intro' className='m-auto varenXFullLogo' />
          </div>
          <div className={'heading md:w-2/3 xs:w-auto m-auto' + settings.home.heading.class ?? ''}>
            {settings.home.heading.title}
          </div>
        </div>
        <div className='button-container flex gap-10 mt-7'>
          <div className={`${settings.home.launchApp.class ?? ''} p-2 ml-auto rounded-sm w-36`}>
            <a target='_blank' rel='noreferrer' href={settings.home.launchApp.link} className='align-middle'>
              {settings.home.launchApp.title}
            </a>
          </div>
          <div
            className={`${
              settings.home.learnMore.class ?? ''
            } p-2 mr-auto rounded-sm w-36 border-primary border ripple block relative`}
          >
            <a target='_blank' rel='noreferrer' href={settings.home.learnMore.link} className='align-middle'>
              {settings.home.learnMore.title}
            </a>
          </div>
        </div>
      </div>
      {/*<div className='absolute bottom-5 right-5 sm:block md:hidden'>
        <a className='flex gap-2 items-center ml-auto' href={'/'} target='_blank' rel='noreferrer'>
          <img className='w-8 h-8' src={ShipSVG} alt={'nft'} />
        </a>
      </div>*/}
      <div className='links-container flex justify-between mt-10 xs:hidden md:flex'>
        <div className={'crypto-links flex flex-col gap-3 md:mb-12' + settings.boxCss}>
          {settings.links.crypto.map((link, index) => (
            <a
              className='flex gap-2 items-center mr-auto h-8'
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
        <div className={'social-links flex flex-col gap-3 md:mb-12' + settings.boxCss}>
          {settings.links.social.map((link, index) => (
            <a
              className='flex gap-2 items-center ml-auto h-8'
              href={link.link}
              target='_blank'
              rel='noreferrer'
              key={`social-links-${index}`}
            >
              {link.leftElement && link.leftElement}
              <img className='w-8 h-8' src={link.path} alt={link.path} />
              {link.rightElement && link.rightElement}
            </a>
          ))}
        </div>
      </div>
      <div className={'absolute right-0 bottom-2 xs:hidden md:block' + settings.boxCss}>
        <a href={'/'} target='_blank' rel='noreferrer'>
          <img className='w-8 h-8' src={ShipSVG} alt={'nft'} />
        </a>
      </div>
    </div>
  );
};
