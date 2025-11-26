// @ts-check
// Docusaurus config for MyAccess Documentation

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MyAccess',
  tagline: 'Your Digital Identity & Rewards Hub',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Production site URL
  url: 'https://myaccess.example.com',
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'myaccess-org',
  projectName: 'myaccess-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/myaccess-org/myaccess-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/myaccess-org/myaccess-docs/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/myaccess-social-card.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'MyAccess',
        logo: {
          alt: 'MyAccess Logo',
          src: 'img/logo.svg',
        },
        items: [
          {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Docs'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {href: 'https://github.com/myaccess-org/myaccess', label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'Getting Started', to: '/docs/intro'},
              {label: 'MyID Prototype', to: '/docs/myid'},
              {label: 'Currency & Rewards', to: '/docs/currency'},
            ],
          },
          /**{
            title: 'Community',
            items: [
              {label: 'Discord', href: 'https://discord.gg/myaccess'},
              {label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/myaccess'},
              {label: 'Twitter', href: 'https://twitter.com/myaccess'},
            ],
          },*/
          {
            title: 'More',
            items: [
              {label: 'Blog', to: '/blog'},
              {label: 'Login', href: 'https://myaccess.anonapp.qzz.io/login'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MyAccess. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
