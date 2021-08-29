// 引入一个路径包
const path = require('path')
// 引入 HTML 插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// 引入 clean 插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


// webpack 中的所有配置信息都应写在 module.exports 中
module.exports = {

  //  指定模式
  mode: 'development',

  // 指定入口文件
  entry: "./src/index.ts",

  // 指定打包文件所在目录(出口)
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后文件的名字
    filename: 'bundle.js',

    // 告诉 webpack 不使用箭头函数(兼容老版本时设置)
    // environment: {
    //   arrowFunction: false,
    //   const: false
    // }
  },

  // 指定 webpack 打包时要使用模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test 指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的 loader (用 'ts-loader' 处理以 .ts 结尾的文件，从后向前执行)
        use: [
          // 配置 babel
          {
            // 指定加载器
            loader: "babel-loader",
            // 设置 babel
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  // {
                    // 要兼容的目标浏览器版本
                    // targets: {
                    //   "chrome": "58",
                    //   "ie": "11"
                    // },

                    // 指定 corejs 版本 (提供老版本浏览器没有的 js新语法 的运行环境)
                    // "corejs": "3",
                    
                    // 使用 corejs 的方式 "usage" 表示按需加载
                    // "useBuiltIns": "usage"
                  // }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        // 要排除的文件
        exclude: /node-modules/
      },

      // 设置 less 文件的处理
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          // 引入 postcss
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions"
                    }
                  ]
                ]
              }
            }
          },
          "less-loader"
        ]
      }

    ]
  },

  // 配置 webpack 插件
  plugins: [
    new CleanWebpackPlugin(),

    new HTMLWebpackPlugin({
      // title: '这是一个自定义的title'

      // 以这个 html 模板 打包
      template: './src/index.html'
    }),
  ],

  // 用来设置引用模块
  resolve: {
    extensions: ['.ts','.js']
  }
}
