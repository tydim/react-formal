const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: require.resolve('./App.js'),
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/docs/'
  },
  cache: false,

  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')]
  },

  module: {
    rules: [
      {
        test: /\.json$/,
        use: { loader: 'json-loader' }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      },
      {
        test: /\.jsx$|\.js$/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/
      },
      {
        test: /\.gif$/,
        use: { loader: 'url-loader?mimetype=image/png' }
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: { loader: 'url-loader?limit=10000&minetype=application/font-woff' }
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: { loader: 'file-loader?name=[name].[ext]' }
      },
      {
        test: /\.md$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'jsx' }
        ]
      },
    ]
  },

  resolve: {
    alias: {
      components: path.resolve(__dirname, './components'),
      react: path.resolve(__dirname, '../node_modules/react')
    },
    extensions: ['.js', 'json'],
  }
};
