const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Open Policy Registry',
  tagline: 'A Docker-inspired workflow for OPA policies',
  url: 'https://openpolicyregistry.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'opcr-io',
  projectName: 'opcr-website',

  plugins: [
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/opcr-io/opcr-website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/opcr-io/opcr-website/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        apiKey: process.env.REACT_APP_ALGOLIA_API_KEY || '_',
        indexName: process.env.REACT_APP_ALGOLIA_INDEX_NAME || '_',
        appId: process.env.REACT_APP_ALGOLIA_APP_ID,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        style: 'dark',
        logo: {
          alt: 'OPCR Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/opcr-io/policy',
            label: 'GitHub',
            position: 'left',
          },
          {
            to: 'https://console.openpolicyregistry.io',
            label: 'Sign in',
            position: 'right',
            target: "_self",
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Tutorial',
                to: '/docs/tutorial',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://asertocommunity.slack.com/join/shared_invite/zt-p06gin84-xNswWpTGyPDPxCz0LMux3g#/shared-invite/email',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/openpolicyreg',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/open-policy-registry',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/opcr-io',
              },
            ],
          },
        ],
        logo: {
          alt: 'Aserto Logo',
          src: 'Aserto-logo-color-120px.png',
          href: 'https://aserto.com',
        },    
        copyright: `Copyright © ${new Date().getFullYear()} - built with ❤️ by Aserto.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rego'],
      },
    }),
});
