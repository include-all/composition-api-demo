class MyPlugin {
  // 构造方法
  constructor(options) {
    console.log('MyPlugin constructor:', options)
  }
  // 应用函数
  apply(compiler) {
    // 绑定钩子事件
    compiler.plugin('compilation', compilation => {
      console.log('MyPlugin')
    })
  }
}

module.exports = MyPlugin
