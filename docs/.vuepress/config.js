const {
  themeConfig,
} = require ('./config/')

module.exports = {
  title: 'Jason\'s Blog',
  description: 'Jason个人站，技术，营销和白日梦',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/blog/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig
}