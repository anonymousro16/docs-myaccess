// @ts-check
// Docusaurus config for MyAccess Documentation

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MyAccess',
  tagline: 'Manage Your Digital Identity and Rewards',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization (i18n) configuration
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ro', 'ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      image: 'img/docusaurus-social-card.jpg',
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
          {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Documentation'},
          {to: '/blog', label: 'Updates', position: 'left'},
          {href: 'https://github.com/facebook/docusaurus', label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {label: 'Getting Started', to: '/docs/intro'},
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'Help & Support', href: 'https://stackoverflow.com/questions/tagged/docusaurus'},
              {label: 'Chat', href: 'https://discordapp.com/invite/docusaurus'},
              {label: 'Follow Us', href: 'https://x.com/docusaurus'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'Updates', to: '/blog'},
              {label: 'Source Code', href: 'https://github.com/facebook/docusaurus'},
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
