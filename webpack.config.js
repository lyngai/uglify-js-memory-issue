const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const UGLIFY_BUG_REPORT_ENABLE = !!process.env.UGLIFY_BUG_REPORT;

module.exports = {
  //   mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: UGLIFY_BUG_REPORT_ENABLE
      ? 'uglify-bug-report.bundle.js'
      : 'uglify.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules(?![\\/]vue-router)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          compress: true,
        },
      }),
    ],
  },
};
