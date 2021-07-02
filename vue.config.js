const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, '/home/rnd03/workspace/source/WAS/sprint1/public'),
  indexPath: path.resolve(__dirname, '/home/rnd03/workspace/source/WAS/sprint1/public/index.html'),
  devServer: {
    overlay: false,
    port:8082,
    host: '9.8.100.152'
  }
};