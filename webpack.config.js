module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["react", "es2015", "stage-1"]
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["node_modules"]
  },
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./"
  }
};
