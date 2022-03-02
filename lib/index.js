
var minimatch = require('minimatch');
var postcss   = require('postcss');


function plugin (opts) {
  var opts = opts || {};
  var autoprefixer = require('autoprefixer')(opts);
  return function (files, metalsmith, done) {
    var styles = Object.keys(files).filter(minimatch.filter("*.css", { matchBase: true }));
    setImmediate(done);
    styles.forEach(function (file, index, arr) {
      files[file].contents = Buffer.from(postcss([autoprefixer]).process(files[file].contents.toString()).css);
    });
  }
}

module.exports = plugin;
