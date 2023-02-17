// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'p6',
  tagline: 'Making 🎨 with 👩‍💻',
  url: 'https://julesfouchy.github.io/',
  baseUrl: '/p6-docs/',
  organizationName: 'julesfouchy',
  projectName: 'p6-docs',
  favicon: 'img/favicon.ico',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  plugins: [[require.resolve('docusaurus-lunr-search'), {excludeRoutes: []}]],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
            path: 'docs',
            routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Site Logo',
          src: 'img/favicon-32x32.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'tutorials/creating-a-project',
            position: 'left',
            label: 'Tutorials',
          },
          {
            type: 'doc',
            docId: 'examples/introduction',
            position: 'left',
            label: 'Examples',
          },
          {
            type: 'doc',
            docId: 'reference/summary',
            position: 'left',
            label: 'Reference',
          },
          {
            to: '/about',
            label: 'About',
          },
          {
            href: 'https://github.com/JulesFouchy/p6-docs/issues',
            position: 'right',
            className: 'header-issues-link',
            'aria-label': 'GitHub issues',
          },
          {
            href: 'https://github.com/JulesFouchy/p6',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
      style: 'dark',
      links: [
        {
          title: 'Raise an issue!',
          items: [
            {
              label: 'Ask a question',
              to: 'https://github.com/JulesFouchy/p6-docs/issues',
            },
            {
              label: 'Report a mistake',
              to: 'https://github.com/JulesFouchy/p6-docs/issues',
            },
            {
              label: 'Give us feedback',
              to: 'https://github.com/JulesFouchy/p6-docs/issues',
            },
          ],
        },
        {
          title: 'Contact Us',
          items: [
            {
              label: 'Discord',
              to: 'https://discord.com/users/372812330742054914',
            },
            {
              label: 'E-Mail',
              to: 'mailto:jules.fouchy@ntymail.com',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/JulesFouchy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${
          new Date()
              .getFullYear()}. Built with <a href="https://docusaurus.io/">Docusaurus</a>.
              <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
              `,
    },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['cmake', 'glsl'],
      },
    }),
};

module.exports = config;
