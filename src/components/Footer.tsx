import { settings } from '../settings';
import fullLogo from '../assets/svg/fullLogo.svg';

export const Footer = () => {
  return (
    <div className={'footer-container p-10 bg-black' + settings.boxCss}>
      <div className='mb-10 md:hidden xs:block'>
        <img src={fullLogo} alt='fullLogo' />
      </div>
      <div className='flex gap-40 lg:gap-20 2xl:gap-32 xs:gap-10'>
        <div className='xs:hidden md:block'>
          <img src={fullLogo} alt='fullLogo' />
        </div>
        <div className='grid grid-cols-4 gap-y-10 w-full justify-around lg:grid-cols-4 xs:grid-cols-2'>
          {settings.Footer.links.map((link, index) => (
            <div className='flex flex-col gap-3 flex-wrap' key={`footer-links-${index}`}>
              <div className={link.class ?? ''}>{link.title}</div>
              <div className={link.linksClass ?? ''}>
                {link.links.map((l, ind) => (
                  <a key={`footer-links-${index}-${ind}`} href={l.link} target='_blank' rel='noopener noreferrer'>
                    {l.title ? (
                      <div className={l.class ?? ''}>{l.title}</div>
                    ) : (
                      <img src={l.icon} alt={l.title} className='w-8' />
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-2 mt-16'>
        <div className={settings.Footer.copyright.class ?? ''}>{settings.Footer.copyright.title}</div>
        {/* <div className={settings.Footer.powerdBy.class ?? ''}>{settings.Footer.powerdBy.title}</div> */}
        {/* <div className={settings.Footer.twitterHandles.class ?? ''}>
          {settings.Footer.twitterHandles.title.split('|').map((handle, index) => (
            <a href={`https://twitter.com/${handle.trim().replace('@', '')}`} target='_blank' key={`handle-${index}`}>
              <span>
                {handle} {index !== settings.Footer.twitterHandles.title.split('|').length - 1 && ' | '}
              </span>
            </a>
          ))}
        </div> */}
      </div>
    </div>
  );
};
