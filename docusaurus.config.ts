import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Jyoti Kiran',
  tagline: 'Documentation Systems Architect | Content Strategist & Designer',
  favicon: 'img/favicon.ico',

  // Future flags
  future: {
    v4: true,
  },

  // Site URL & Base URL
  url: 'https://JKwrites-tech.github.io',
  baseUrl: '/DocsThatSpeak/',

  // GitHub Pages deployment
  organizationName: 'JKwrites-tech',
  projectName: 'DocsThatSpeak',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Custom fields
  customFields: {
    deploymentUrl: 'https://JKwrites-tech.github.io/DocsThatSpeak/',
  },

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:'https://github.com/JKwrites-tech/DocsThatSpeak/edit/main/', // Correctly points to your repo
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All Posts',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:'https://github.com/JKwrites-tech/DocsThatSpeak/edit/main/blog/', // Correctly points to your repo
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Docs That Speak',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Chapters',
        },
        {to: '/docs/documentation-strategy', label: 'Docs', position: 'left'},
        {
          href: 'https://github.com/JKwrites-tech/DocsThatSpeak',
          label: 'Repository',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Documentation Strategy', to: '/docs/documentation-strategy'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus'},
            {label: 'Discord', href: 'https://discordapp.com/invite/docusaurus'},
            {label: 'X', href: 'https://x.com/docusaurus'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'GitHub', href: 'https://github.com/JKwrites-tech/DocsThatSpeak'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jyoti Kiran. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;