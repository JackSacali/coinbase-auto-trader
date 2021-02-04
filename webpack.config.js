module.exports = (_, { options }) => {
  return {
    entry: './src/index.ts',
    mode: 'production',
    output: {
      filename: 'coinbase-auto-trader.js',
      path: './dist',
    },
    devtool: 'none',
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    }
  }
}