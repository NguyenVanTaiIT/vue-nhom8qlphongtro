// webpack.config.js or vue.config.js
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),  // or 'assets', depending on your setup
    },
    compress: true, // Optional: Enables gzip compression
    port: 3000, // Optional: Set a custom port
    open: false, // Optional: Auto-open the browser
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      })
    ],
  },


};