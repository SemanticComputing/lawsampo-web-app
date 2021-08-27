const { merge } = require('webpack-merge')
const common = require('./webpack.client.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    hot: true,
    port: 3030,
    open: true,
    historyApiFallback: true,
    devMiddleware: {
      publicPath: '/'
    }
  }
})
