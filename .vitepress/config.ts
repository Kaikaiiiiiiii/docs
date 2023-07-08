import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SwanHub Docs",
  description: "Documentation for SwanHub",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',  // 实际文件路径是 /src/public/logo.svg
    siteTitle: 'SwanHub 官方文档',
    editLink: {
      pattern: 'https://github.com/BlackSwanXDU/docs/edit/main/src/:path'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],

    sidebar: [{
      text: '官方教程',
      link: '/guide/',
      items: [
        {
          text: 'Repo',
          items: [
            { text: '代码仓库', link: '/guide/repo/', items: [
              { text: 'Tour', link: '/guide/repo/tour' },
            ] }
          ]
        }, 
        {
          text: 'Demo',
          items: [
            { text: '演示空间', link: '/guide/demo/' }
          ]
        }
      ]
    }],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BlackSwanXDU/docs' }
    ]
  },
  srcDir: './src'
})
