module.exports = {
  base: '/blog/',
  title: 'xu blog',
  description: 'hello word',
  themeConfig: {
    editLinks: false,
    sidebar: [
      {
        title: 'VUE',
        collapsable: true,
        children: [
          ['vue/', '介绍'],
          ['vue/reactive', '响应式']
        ]
      }
    ]
  }
}