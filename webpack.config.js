module.exports = {
  entry: "./app.js",
  output: {
    filename: "./build/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}
