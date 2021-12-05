import { Info } from './components/Common';
import debankSVG from './assets/svg/crypto/debank.svg';
import coingeckoSVG from './assets/svg/crypto/coingecko.svg';
import coinmarketcapSVG from './assets/svg/crypto/coinmarketcap.svg';
import defipulseSVG from './assets/svg/crypto/defipulse.svg';
import zerionSVG from './assets/svg/crypto/zerion.svg';
import discordGoldSVG from './assets/svg/social/discord-gold.svg';
import discordSVG from './assets/svg/social/discord.svg';
import githubSVG from './assets/svg/social/github.svg';
import mediumSVG from './assets/svg/social/medium.svg';
import twitterSVG from './assets/svg/social/twitter.svg';
import telegramSVG from './assets/svg/social/telegram.svg';
import varenXSVG from './assets/svg/varenX.svg';
import Swap from './assets/images/Swap.png';
import SwapNew from './assets/images/Swap_New.png';
import varenXFullLogo from './assets/svg/varenXFull.svg';

import firstPNG from './assets/images/swap/first.png';
import secondPNG from './assets/images/swap/second.png';
import thirdPNG from './assets/images/swap/third.png';
import fourthPNG from './assets/images/swap/fourth.png';
import fifthPNG from './assets/images/swap/fifth.png';

import discordFace from './assets/svg/social/discord-face.svg';

interface ISettings {
  navlinks: {
    title: string;
    link: string;
    class?: string;
  }[];
  homeIntro?: string;
  home: Record<
    'heading' | 'launchApp' | 'learnMore',
    {
      title: string;
      link?: string;
      class?: string;
    }
  >;
  links: Record<
    'crypto' | 'social',
    {
      path: string;
      title: string;
      link: string;
      leftElement?: React.ReactNode;
      rightElement?: React.ReactNode;
      class?: string;
    }[]
  >;
  description: {
    varenXLogo: string;
    cards: {
      image: string;
      title: {
        text: string;
        class?: string;
      };
      description: {
        text: string;
        class?: string;
      };
      button: {
        text: string;
        link: string;
        class?: string;
      };
    }[];
  };
  swap: {
    image: string;
  }[];
  About: {
    about: Record<
      'heading_first' | 'heading_second' | 'sub_heading',
      {
        title: string;
        class?: string;
      }
    >;
    discord: {
      title: {
        text: string;
        class?: string;
      };
      description: {
        text: string;
        class?: string;
      };
      button: {
        text: string;
        leftElement?: string;
        link: string;
        class?: string;
      };
    };
  };
  Footer: {
    links: {
      title: string;
      class?: string;
      linksClass?: string;
      links: {
        title?: string;
        icon?: string;
        link?: string;
        class?: string;
      }[];
    }[];
    copyright: {
      title: string;
      class?: string;
    };
  };
  boxCss: string;
}

export const settings: ISettings = {
  navlinks: [
    {
      title: 'STAKING',
      link: 'https://varen.exchange/#/stake',
      class: 'nav-link text-center text-f14px md:text-f12px lg:text-f14px hover:bg-hoverNav hover:rounded md:w-auto',
    },
    {
      title: 'GOVERNANCE',
      link: 'https://snapshot.org/#/varen.eth',
      class: 'nav-link text-center text-f14px md:text-f12px lg:text-f14px hover:bg-hoverNav hover:rounded md:w-auto',
    },
    {
      title: 'FORUM',
      link: 'https://forum.varen.finance/',
      class: 'nav-link text-center text-f14px md:text-f12px lg:text-f14px hover:bg-hoverNav hover:rounded md:w-auto',
    },
    {
      title: 'Launch App',
      link: 'https://varenx.com/',
      class:
        'button launch-app bg-primary text-white w-36 text-center text-base active:bg-bActive hover:bg-bActive rounded text-f18px font-avenirHeavy md:text-f14px lg:text-f18px',
    },
  ],
  homeIntro: varenXFullLogo,
  home: {
    heading: {
      title: 'Multi-chain swapping dApp, powered by RenVM',
      class: ' text-gold text-f32px md:text-f32px xs:text-f18px',
    },
    launchApp: {
      title: 'Launch App',
      link: 'https://varenx.com/',
      class:
        'button bg-primary text-white w-36 text-center  active:bg-bActive hover:bg-bActive rounded xs:text-f12px md:text-f18px font-avenirHeavy',
    },
    learnMore: {
      title: 'Learn More',
      link: 'https://gitbook.varen.finance',
      class: 'xs:text-f12px md:text-f18px font-avenirHeavy',
    },
  },
  links: {
    crypto: [

      {
        path: zerionSVG,
        title: 'zerion',
        link: 'https://app.zerion.io/market/asset/VRN-0x72377f31e30a405282b522d588aebbea202b4f23',
      },
      {
        path: defipulseSVG,
        title: 'defipulse',
        link: 'https://defipulse.com/varen',
      },
      {
        path: coinmarketcapSVG,
        title: 'coinmarketcap',
        link: 'https://coinmarketcap.com/currencies/varen/',
      },
      {
        path: coingeckoSVG,
        title: 'coingecko',
        link: 'https://www.coingecko.com/en/coins/varen',
      },
    ],
    social: [
      {
        path: discordGoldSVG,
        leftElement: Info({
          text: 'Contribute Now!',
          position: 'left',
          className: 'bg-gold text-black xs:text-f10px md:text-f18px font-avenirHeavy',
        }),
        title: 'discord',
        link: 'https://discord.varen.finance/',
      },
      {
        path: twitterSVG,
        title: 'twitter',
        link: 'https://twitter.varen.finance/',
      },
      {
        path: githubSVG,
        title: 'github',
        link: 'https://github.varen.finance/',
      },
      {
        path: mediumSVG,
        title: 'medium',
        link: 'https://blog.varen.finance/',
      },
      {
        path: telegramSVG,
        title: 'telegram',
        link: 'https://telegram.varen.finance/',
      },
    ],
  },
  description: {
    varenXLogo: varenXSVG,
    cards: [
      {
        image: SwapNew,
        title: {
          text: 'Go wherever you want, whenever you want',
          class: 'card-title font-euclidMd title xl:text-f48px md:text-f36px xs:text-f24px',
        },
        description: {
          text: 'Swap your favorite ERC-20 tokens direct to any RenVM-supported chain and back. Seamlessly. With VarenX',
          class: 'card-description font-avenir description xl:text-f30px md:text-f24px xs:text-f14px',
        },
        button: {
          link: 'https://varenx.com/',
          text: 'Launch VarenX',
          class:
            'button bg-primary text-white w-36 lg:w-52 md:w-44 xs:w-36 text-center active:bg-bActive hover:bg-bActive rounded xs:text-f12px md:text-f18px font-avenirHeavy',
        },
      },
      {
        image: Swap,
        title: {
          text: 'All in one seamless transaction',
          class: 'card-title font-euclidMd title xl:text-f48px md:text-f36px xs:text-f24px',
        },
        description: {
          text: 'VarenX smart contracts are developed to mint, burn and swap your assets in a single transaction, saving you time, effort and gas.',
          class: 'card-description font-avenir description xl:text-f30px md:text-f24px xs:text-f14px',
        },
        button: {
          link: 'https://varenx.com/',
          text: 'Launch VarenX',
          class:
            'button bg-primary text-white w-36 lg:w-52 md:w-44 xs:w-36 text-center active:bg-bActive hover:bg-bActive rounded xs:text-f12px md:text-f18px font-avenirHeavy',
        },
      },
    ],
  },
  swap: [
    {
      image: firstPNG,
    },
    {
      image: secondPNG,
    },
    {
      image: thirdPNG,
    },
    {
      image: fourthPNG,
    },
    {
      image: fifthPNG,
    },
  ],
  About: {
    about: {
      heading_first: {
        title: 'A collective powerhouse',
        class: 'font-euclidMd xl:mt-5 md:mt-4 xs:mt-5 md:text-f48px xs:text-f24px',
      },
      heading_second: {
        title: 'making DeFi accessible',
        class: 'font-euclidMd md:text-f48px xs:text-f24px',
      },
      sub_heading: {
        title:
          'Varen is a community-governed DAO that strives to achieve its collective vision of bringing frictionless cross-chain accessibility to the world by relentlessly building high usability dapps.',
        class: 'font-avenir text-gray xs:text-f14px md:text-f24px lg:text-f30px',
      },
    },
    discord: {
      title: {
        text: 'Join us now on Discord!',
        class: 'discord-heading font-euclid text-black font-bold md:text-f24px xs:text-f14px',
      },
      description: {
        text: 'No matter your ethnicity, gender, or location. You are free to join!',
        class: 'discord-description font-avenir text-black md:text-f18px xs:text-f12px',
      },
      button: {
        text: 'Join',
        leftElement: discordFace,
        link: 'https://discord.varen.finance/',
        class:
          'button discord-join bg-primary text-white text-center block font-bold active:bg-bActive hover:bg-bActive rounded font-avenirHeavy',
      },
    },
  },
  Footer: {
    links: [
      {
        title: 'Product',
        class: 'font-euclid font-bold text-white',
        linksClass: 'flex flex-col gap-3',
        links: [
          {
            title: 'VarenX',
            link: 'https://varenx.com',
            class: 'font-avenir text-gray',
          },
          {
            title: 'Migrate',
            link: 'https://varen.exchange/#/migrate',
            class: 'font-avenir text-gray',
          },
          {
            title: 'Stake',
            link: 'https://varen.exchange/#/stake',
            class: 'font-avenir text-gray',
          },

        ],
      },
      {
        title: 'About',
        class: 'font-euclid font-bold text-white',
        linksClass: 'flex flex-col gap-3',
        links: [
          {
            title: 'Blog',
            link: 'https://blog.varen.finance/',
            class: 'font-avenir text-gray',
          },
          {
            title: 'Governance',
            link: 'https://snapshot.org/#/varen.eth',
            class: 'font-avenir text-gray',
          },
          {
            title: 'Forum',
            link: 'https://forum.varen.finance/',
            class: 'font-avenir text-gray',
          },
        ],
      },
      {
        title: 'Community',
        class: 'font-euclid font-bold text-white',
        linksClass: 'flex flex-col gap-3',
        links: [
          {
            title: 'Bounty Board',
            link: 'https://bounty.varen.finance/',
            class: 'font-avenir text-gray',
          },
          {
            title: 'Support',
            link: 'https://discord.varen.finance/',
            class: 'font-avenir text-gray',
          },

        ],
      },
      {
        title: 'Join Us',
        class: 'font-euclid font-bold text-white',
        linksClass: 'flex flex-row gap-3 flex-wrap',
        links: [
          {
            icon: discordSVG,
            link: 'https://discord.varen.finance/',
          },
          {
            icon: twitterSVG,
            link: 'https://twitter.com/varenfinance',
          },
          {
            icon: githubSVG,
            link: 'https://github.varen.finance/',
          },
          {
            icon: mediumSVG,
            link: 'https://blog.varen.finance/',
          },
          {
            icon: telegramSVG,
            link: 'https://telegram.varen.finance/',
          },
        ],
      },
    ],
    copyright: {
      title: '© 2021 | Varen Finance DAO',
      class: 'text-center text-white',
    },
  },
  boxCss: ' xl:pt-12 xl:pl-24 xl:pr-24 lg:pt-14 lg:pl-14 lg:pr-14 xs:pt-5 xs:pl-4 xs:pr-4',
};
