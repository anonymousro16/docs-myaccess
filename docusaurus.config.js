// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MyAccess',
  tagline: 'Manage Your Digital Identity and Rewards',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ro', 'ja'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Disable "Edit this page" button
          // editUrl: undefined,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Disable "Edit this page" button
          // editUrl: undefined,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    colorMode: { respectPrefersColorScheme: true },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'MyAccess',
      logo: { alt: 'MyAccess Logo', src: 'img/logo.svg' },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Documentation' },
        { to: '/blog', label: 'Updates', position: 'left' },
        { href: 'https://github.com/facebook/docusaurus', label: 'GitHub', position: 'right' },
        { type: 'localeDropdown', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [{ label: 'Getting Started', to: '/docs/intro' }],
        },
        {
          title: 'Community',
          items: [
            { label: 'Help & Support', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
            { label: 'Chat', href: 'https://discordapp.com/invite/docusaurus' },
            { label: 'Follow Us', href: 'https://x.com/docusaurus' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Updates', to: '/blog' },
            { label: 'Source Code', href: 'https://github.com/facebook/docusaurus' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MyAccess. Built with Docusaurus.`,
    },

    // Prism code highlighting
    prism: {
      theme: prismThemes.github,      // Light mode default
      darkTheme: prismThemes.dracula, // Dark mode default
      additionalThemes: {
        okaidia: prismThemes.okaidia,
        vsDark: prismThemes.vsDark,
        duotoneLight: prismThemes.duotoneLight,
        duotoneDark: prismThemes.duotoneDark,
        nightOwl: prismThemes.nightOwl,
        nightOwlLight: prismThemes.nightOwlLight,
        shadesOfPurple: prismThemes.shadesOfPurple,
        palenight: prismThemes.palenight,
      },
    },
  },
};

export default config;
