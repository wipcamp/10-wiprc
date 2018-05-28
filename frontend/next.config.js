const webpack = require('webpack')

require('dotenv').config()

module.exports = {
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.API_URL': JSON.stringify(process.env.API_URL)
      })
    )
    return config
  }
}
