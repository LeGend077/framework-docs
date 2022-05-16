import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Minecraft CSS Framework',
  base: '/framework-docs/',
  head: [
    ['script',{ src: 'https://unpkg.com/minecraft-framework-css@1.1.7/css/assets/script.js' }]
  ],
  themeConfig: {
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