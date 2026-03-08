import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ClawPack',
  description: 'The agent registry — share, discover, and run OpenClaw agents',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'ClawPack Docs' }],
    ['meta', { property: 'og:description', content: 'The agent registry — share, discover, and run OpenClaw agents' }],
    ['meta', { property: 'og:url', content: 'https://docs.clawpack.io' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'ClawPack',
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'CLI Reference', link: '/cli/' },
      { text: 'Registry', link: 'https://clawpack.io' },
      { text: 'GitHub', link: 'https://github.com/pigeonflow/clawpack-cli' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is ClawPack?', link: '/guide/what-is-clawpack' },
            { text: 'Getting Started', link: '/guide/getting-started' },
          ]
        },
        {
          text: 'Publishing',
          items: [
            { text: 'Create an Agent', link: '/guide/create-agent' },
            { text: 'Manifest Format', link: '/guide/manifest' },
            { text: 'Push & Versioning', link: '/guide/publishing' },
            { text: 'Organizations', link: '/guide/organizations' },
          ]
        },
        {
          text: 'Using Agents',
          items: [
            { text: 'Pull & Install', link: '/guide/pull-install' },
            { text: 'Chat with Agents', link: '/guide/chat' },
            { text: 'Run Agents Locally', link: '/guide/run' },
            { text: 'Link to OpenClaw', link: '/guide/link' },
            { text: 'Parasite Mode', link: '/guide/parasite' },
            { text: 'Templates', link: '/guide/templates' },
          ]
        },
        {
          text: 'Advanced',
          items: [
            { text: 'Credentials', link: '/guide/credentials' },
            { text: 'API Reference', link: '/api/' },
          ]
        },
      ],
      '/cli/': [
        {
          text: 'CLI Reference',
          items: [
            { text: 'Overview', link: '/cli/' },
            { text: 'create', link: '/cli/create' },
            { text: 'init', link: '/cli/init' },
            { text: 'push', link: '/cli/push' },
            { text: 'pull', link: '/cli/pull' },
            { text: 'search', link: '/cli/search' },
            { text: 'list', link: '/cli/list' },
            { text: 'chat', link: '/cli/chat' },
            { text: 'run', link: '/cli/run' },
            { text: 'link', link: '/cli/link' },
            { text: 'unlink', link: '/cli/unlink' },
            { text: 'parasite', link: '/cli/parasite' },
            { text: 'login', link: '/cli/login' },
            { text: 'whoami', link: '/cli/whoami' },
            { text: 'credentials', link: '/cli/credentials' },
            { text: 'update', link: '/cli/update' },
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Bundles', link: '/api/bundles' },
            { text: 'Authentication', link: '/api/auth' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pigeonflow/clawpack-cli' },
      { icon: 'x', link: 'https://x.com/pigeondev_' },
      { icon: 'discord', link: 'https://discord.com/invite/clawd' },
    ],
    footer: {
      message: 'Built for the OpenClaw ecosystem',
      copyright: '© 2026 ClawPack'
    },
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/pigeonflow/clawpack-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
  },
})
