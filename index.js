var _ = require('underscore');
var transformTools = require('browserify-transform-tools');

module.exports = transformTools.makeStringTransform('underscore-templates', null, function(content, transformOptions, done) {
  var fn = transformOptions.file;
  var ext = transformOptions.config.ext;

  if (fn.indexOf(ext, fn.length - ext.length) !== -1) {


    var src = 'var _ = require("underscore");\n';
    src += 'module.exports = ' + _.template(content).source;

    done(null, src);
  } else {
    done(null, content);
  }
});
