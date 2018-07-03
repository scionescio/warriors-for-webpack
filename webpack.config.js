module.exports = {
  entry: "./index.js",
  devtool: "source-map",
  output: {
    filename: "static/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          plugins: [
            "transform-object-rest-spread",
            "transform-decorators-legacy"
          ],
          presets: ["react", "es2015"]
        } //@ future me, suck it
      },
      {
        test: /\.css$/,
        use: ["css-loader"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  }
};
