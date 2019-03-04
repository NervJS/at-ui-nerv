const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      {
        test: /\.(css|scss|sass)(\?.*)?$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
              // modules: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                autoprefixer({
                  browsers: [
                    'ie >= 9',
                    'Chrome >= 21',
                    'Firefox >= 1',
                    'Edge >= 13',
                    'last 3 versions'
                  ],
                  flexbox: 'no-2009'
                })
              ]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|bpm|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 3000,
          name: 'img/[name].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 3000,
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    })
  ]
}
