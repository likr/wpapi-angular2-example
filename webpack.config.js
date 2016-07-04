/* eslint-env node */

module.exports = {
  entry: './assets/_ts/main.ts',
  output: {
    filename: './assets/js/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.ts/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  }
}
