const ora = require('ora')
const webpack = require('webpack')
const merge = require('merge')
const baseWebpackConfig = require('../site/webpack.base.conf')

const spinner = ora('building components for production')

spinner.start()

baseWebpackConfig.entry = {}

const buildsConfig = {
  dev: {
    filename: 'at.react.js',
    library: 'at',
    libraryTarget: 'umd',
    env: 'development'
  },
  prod: {
    filename: 'at.min.js',
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
      libraryTarget: options.libraryTarget
    },
    externals: {

    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        progress: true,
        hide_modules: true
      }),
      new webpack.BannerPlugin({
        banner: `/*!AT-UI*/`,
        raw: true
      })

    ]
  })
  if (options.env === 'production') {
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    )
  }
  return config
}

Object.keys(buildsConfig).map(conf => {
  webpack(getConfig(buildsConfig[conf]), (err, stats) => {
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
