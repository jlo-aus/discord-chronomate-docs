/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Chronomate',
  tagline: 'Automate your discord guild icon',
  url: 'https://jlo-aus.github.io',
  baseUrl: '/discord-chronomate-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/my_favicon.ico',
  organizationName: 'jlo-aus', // Usually your GitHub org/user name.
  projectName: 'discord-chronomate-docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: true,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌙',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '😎',

        lightIconStyle: {
          marginLeft: '3px',
        },
      },
    },
    announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content:
        'If you like using Chronomate please consider <a target="_blank" rel="noopener noreferrer" href="https://www.buymeacoffee.com/jloaus">donating</a>',
      backgroundColor: '#FFCB5F', // Defaults to `#fff`.
      textColor: '#312712', // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
    },
    navbar: {
      hideOnScroll: true,
      title: 'Chronomate',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://discord.gg/MQ3SHgWVT2',
          label: 'Support',
          position: 'left',
        },
        {
          href: 'https://discord.com/api/oauth2/authorize?client_id=505166442338058251&permissions=11360&scope=bot',
          label: 'Invite',
          position: 'left',
        },
        {
          href: 'https://www.buymeacoffee.com/jloaus',
          label: 'Donate',
          position: 'right',
          className: 'header-gitlab-link'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Quick Help',
          items: [
            {
              label: 'Get Started',
              to: 'docs/',
            },
            {
              label: 'Commands',
              to: 'docs/cmds/',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Discord Server',
              href: 'https://discord.gg/MQ3SHgWVT2',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Invite',
              href: 'https://discord.com/api/oauth2/authorize?client_id=505166442338058251&permissions=11360&scope=bot',
            },
            {
              label: 'Donate',
              href: 'https://www.buymeacoffee.com/jloaus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Chronomate, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
