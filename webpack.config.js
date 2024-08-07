const path = require("path");
const { env } = require("process");

module.exports = {
  entry: "./index.js",
  mode: "none",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",    
    iife: false,
  },
  target: "web",
  resolve: {
    fallback: {
      crypto: false,
      stream: false,
      url: false,
      path: false,
      https: false,
      http: false,
      fs: false,
      assert: false,
      buffer: false,
      querystring: false,
      zlib: false,
      os: false,
      tls: false,
      NODE_DEBUG: false,
      buffer: require.resolve("buffer/"),
      stream: require.resolve("stream-browserify"),
      crypto: require.resolve("crypto-browserify"),
    },
    extensions: [".ts", ".js"],
    
  },
};
