var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    app: './src/app.js'

  },
  output: {
    filename: 'public/build/bundle.js',
    sourceMapFilename: 'public/build/bundle.map'
  },
  plugins: [
      new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
      }),
      new webpack.optimize.UglifyJsPlugin(),
    ],
  devtool: '#source-map',
  module: {
    loaders:[
        {
        loader:'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
