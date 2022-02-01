const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'p6',
  tagline: 'Making 🎨 with 👩‍💻',
  url: 'https://julesfouchy.github.io/',
  baseUrl: '/p6-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'julesfouchy',
  projectName: 'p6-docs',
  plugins: [[require.resolve('docusaurus-lunr-search'), {excludeRoutes: []}]],
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Site Logo',
        src: 'img/favicon-32x32.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'tutorials/introduction',
          position: 'left',
          label: 'Tutorials',
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
          href: 'https://github.com/JulesFouchy/p6-docs',
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
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
