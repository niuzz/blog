const frontendbar = [
  {
    title: "基础",
    collapsable: false,
    children: [
      "基础/Javascript高级程序设计笔记",
      "基础/常见源码实现" ,
      "基础/继承与原型链" ,
      "基础/css基础"    
    ]
  }, 
  {
    title: "进阶",
    collapsable: false,
    children: [
      {
        title: "webpack",
        children: [
          "进阶/w1-最简单的webpack4项目",
          "进阶/w2-动手搭建个vue项目",
          "进阶/w3-webpack4详解",
          "进阶/w4-自己实现个webpack",
        ]
      }
    ]
  },
  {
    title: "实战",
    collapsable: false,
    children: [
      "实战/VueUI库"
    ]
  },
  {
    title: "周边技术",
    collapsable: false,
    children: [
      "周边/vuepress搭建blog"
    ]
  }
];

module.exports = {
  "/前端开发/": frontendbar
};
