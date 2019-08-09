const sidebar = require('./sidebar')

module.exports = {
  nav:[ // 导航栏配置
    {text: '前端', link: '/前端开发/' },
    {text: '算法', link: '/算法/'},
    {text: '增长黑客', link: '/增长黑客/'},
    {text: '故事', link: '/故事/'}      
  ],
  sidebar,
  sidebarDepth: 3, // 侧边栏显示2级
}