const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 获取绝对路径
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  /* devServer: {
    contentBase: "./dist",
    host: '172.27.106.42',
    port: 8080,
    open: true
    }, */
  mode: 'development',
  // Webpack 入口文件
  entry: {
    index: './src/pages/index',
    destination: './src/pages/destination',
    personal:'./src/pages/personal',
    details:'./src/pages/details',
    login:'./src/pages/login',
    loginRegister:'./src/pages/loginRegister',
    personalMessage:'./src/pages/personalMessage'
  },
  // Webpack 输出路径
  output: {
    // 输出的目录
    path: resolve('dist'),
    // 输出的文件名
    filename: 'js/[name].js'
  },
  // source-map，调试用的，出错的时候，将直接定位到原始代码，而不是转换后的代码
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    // 自动补全（可以省略）的扩展名
    extensions: ['.js'],
    // 路径别名
    alias: {
      api: resolve('src/api'),
      icons: resolve('src/assets/icons'),
      styles: resolve('src/assets/styles'),
      components: resolve('src/components'),
      pages: resolve('src/pages'),
      utils: resolve('src/utils')
    }
  },
  // 不同类型模块的处理规则
  module: {
    rules: [
      // css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // 模板文件
      {
        test: /\.art$/,
        loader: 'art-template-loader'
      },
      // 图片
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        options: {
          // 小于 10K 的图片转成 base64 编码的 dataURL 字符串写到代码中
          limit: 10000,
          // 其他的图片转移到
          name: 'images/[name].[ext]',
          esModule: false
        }
      },
      // 字体文件
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    // 自动将依赖注入 html 模板，并输出最终的 html 文件到目标文件夹
    new HtmlWebpackPlugin({
      filename: 'firstpage.html',
      template: './src/pages/index/index.art',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'destination.html',
      template: './src/pages/destination/destination.art',
      chunks: ['destination']
    }),
    new HtmlWebpackPlugin({
      filename: 'personal.html',
      template: './src/pages/personal/personal.art',
      chunks: ['personal']
    }),
    new HtmlWebpackPlugin({
      filename: 'details.html',
      template: './src/pages/details/details.art',
      chunks: ['details']
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/login/login.art',
      chunks: ['login']
    }),
    new HtmlWebpackPlugin({
      filename: 'loginRegister.html',
      template: './src/pages/loginRegister/loginRegister.art',
      chunks: ['loginRegister']
    }),
    new HtmlWebpackPlugin({
      filename: 'personalMessage.html',
      template: './src/pages/personalMessage/personalMessage.art',
      chunks: ['personalMessage']
    })
  ]
};