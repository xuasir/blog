const path = require('path')

module.exports = {
  base: '/blog/',
  title: '阿Sir手记',
  description: '记录工作中的阶段性总结',
  themeConfig: {
    editLinks: false,
    sidebar: {
      '/': [
        {
          text: 'Vue',
          children: [
            {text: 'Vue分析', link: '/vue/'},
            {text: '响应式', link: '/vue/reactive'}
          ]
        },
        {
          text: '异步编程',
          children: [
            {text: '异步编程模型', link: '/async/'},
            // {link:'async/promise', text:'promiseA+的规范及实现'},
            {link:'async/eventloop', text:'事件循环'},
          ]
        },
        {
          text: '编程思想',
          children: [
            // {link:'paradigm/', text:'编程范式'},
            {link:'paradigm/functional', text:'函数式编程'}
          ]
        },
      ]
    }
  }
}