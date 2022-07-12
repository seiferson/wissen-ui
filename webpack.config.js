module.exports = {
    entry: './src/App.jsx',
  
    output: {
      path: __dirname + '/js',
      filename: 'core.js'
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    
    module: {
      rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      }
    ]
  }
  };