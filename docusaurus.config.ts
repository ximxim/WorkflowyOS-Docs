import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Workflowy.ai',
  tagline: 'Executive AI Training for PurposeMed',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ximxim.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/WorkflowyOS-Docs/',

  // GitHub pages deployment config.
  organizationName: 'ximxim',
  projectName: 'WorkflowyOS-Docs',

  // GitHub Pages adds a trailing slash by default that we need to customize
  trailingSlash: false,

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
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/ximxim/WorkflowyOS-Docs/tree/main/',
          // Hide breadcrumbs globally
          breadcrumbs: false,
        },
        blog: false, // Disable blog for training site
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-llms',
      {
        generateLLMsTxt: true,
        generateLLMsFullTxt: true,
        generateMarkdownFiles: true,
        excludeImports: true,
        removeDuplicateHeadings: true,
        includeOrder: [
          'welcome.mdx',
          'getting-started.mdx',
          'your-ai-toolkit.mdx',
          'prompting/*',
          'context-and-memory/*',
          'research-and-content/*',
          'automation/*',
          'governance/*',
          'leadership/*',
          'faq.mdx',
        ],
        pathTransformation: {
          ignorePaths: ['docs']
        },
        outputDir: 'build',
      },
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        docsRouteBasePath: "/",
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        language: "en",
        searchResultLimits: 8,
        highlightSearchTermsOnTargetPage: false,
      }),
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: 'img/docusaurus-social-card.png',
    metadata: [
      {name: 'keywords', content: 'Workflowy.ai, AI training, PurposeMed, healthcare AI, executive training, Claude, Gemini'},
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'Workflowy.ai Training'},
    ],
    navbar: {
      title: 'Workflowy.ai',
      logo: {
        alt: 'Workflowy.ai Logo',
        src: 'img/logo.png',
      },
      items: [],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Training',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started',
            },
            {
              label: 'FAQ',
              to: '/faq',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Workflowy.ai',
              href: 'https://workflowy.ai',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
