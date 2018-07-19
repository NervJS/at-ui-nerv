const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

const { getProjectRoot } = require('../util')

const projectRoot = getProjectRoot()
const siteRoot = path.join(projectRoot, 'site')

module.exports = {
  entry: {
    index: `${siteRoot}/app.jsx`
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader'
              },
              {
                loader: 'ts-loader'
              }
            ]
          },
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: 'babel-loader'
          },
          {
            test: /\.html$/,
            loader: 'html-withimg-loader'
          },
          {
            test: /\.yml$/,
            loader: 'json-loader!yaml-loader'
          },
          {
            test: /\.md$/,
            loader: `babel-loader!${path.join(__dirname, './loader/adddImportLoader.js')}`
          },
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
                      browsers: ['ie >= 9', 'Chrome >= 21', 'Firefox >= 1', 'Edge >= 13', 'last 3 versions'],
                      flexbox: 'no-2009'
                    })
                  ]
                }
              },
              'sass-loader'
            ]
          },
          {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'file-loader',
            options: {
              name: 'media/[name].[ext]'
            }
          },
          {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'file-loader',
            options: {
              limit: 3000,
              name: 'fonts/[name].[ext]'
            }
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
            exclude: /\.js|\.css|\.scss|\.sass|\.html|\.json|\.ejs$/,
            loader: 'url-loader',
            options: {
              limit: 2000,
              name: 'ext/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      react: 'nervjs',
      'react-dom': 'nervjs',
      '@md': path.resolve(__dirname, '../../site/markdown/zh/'),
      '@src': path.resolve(__dirname, '../../src/')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${siteRoot}/index.html`
    })
  ]
}
