import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Minecraft CSS Framework',
  base: '/framework-docs/',
  head: [
    ['script',{ src: 'https://unpkg.com/minecraft-framework-css@1.1.7/css/assets/script.js' }],
    ['link',{ rel: 'stylesheet',href: 'https://unpkg.com/minecraft-framework-css@1.1.7/css/main.css' }]
  ],
  lastUpdated: true,
  themeConfig: {
    algolia: {
      appId: 'IQ32K9U9F7',
      apiKey: '57bb291a4a48fbbe296c8714156dc614',
      indexName: 'minecraft-css-framework'
    },
    lastUpdated: 'Last Updated',
    editLinks: true,
    repo: 'LeGend077/framework-docs',
    docsBranch: 'docs',
    docsDir: 'docs',
    editLinkText:'Edit this page on Github',
    nav:[
      {
        text:'Home',
        link: '/'
      },
      {
        text:'Docs',
        link: '/docs/'
      },
      {
        text:'About',
        link: '/about'
      },
      {
        text:'Contact',
        link: '/contact'
      },
    ]
  }
})
