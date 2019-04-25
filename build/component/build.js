const ora = require('ora')
const webpack = require('webpack')
const merge = require('merge')
const baseWebpackConfig = require('../site/webpack.base.config.js')
const path = require('path')
const spinner = ora('building components for production')
spinner.start()

baseWebpackConfig.entry = {}

const status = process.argv[process.argv.length - 1]
const buildsConfig = {
  dev: {
    filename: 'at.nerv.js',
    library: 'at',
    libraryTarget: 'umd',
    env: 'development'
  },
  prod: {
    filename: 'at.nerv.min.js',
    library: 'at',
    libraryTarget: 'umd',
    env: 'production'
  }

}

function getConfig (options) {
  const config = merge(baseWebpackConfig, {
    entry: {
      main: './src/index.ts'
    },
    output: {
      filename: options.filename,
      library: options.library,
      libraryTarget: options.libraryTarget,
      path: path.resolve(__dirname, '../../', 'dist')
    },
    externals: [
      function (context, request, callback) {
        if (request.indexOf('nerv') > -1 || request.indexOf('react-transition-group') > -1 || request.indexOf('classnames') > -1) {
          return callback(null, 'commonjs ' + request)
        };
        callback()
      }
    ],
    devtool: status === 'lan' ? 'source-map' : false,
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        progress: true,
        hide_modules: true
      }),
      new webpack.BannerPlugin({
        banner: `/*!AT-UI-Nerv*/`,
        raw: true
      })
    ]
  })
  if (options.env === 'production') {
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        sourceMap: true
      })
    )
  }
  return config
}

Object.keys(buildsConfig).map(conf => {
  let config = getConfig(buildsConfig[conf])
  console.log('config', conf)
  webpack(config, (err, stats) => {
    spinner.stop()
    if (err) {
      throw err
    }
    process.stdout.write(`${stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    })}\n`)
  })
})
