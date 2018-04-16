module.exports = function getHTML (options, callback) {
  /* Your code here */

  var https = require('https');

  https.get(options, function (response) {

    response.setEncoding('utf8');

    var output = "";

    response.on('data', function (data) {
      output += data + "\n";
    });

    response.on('end', function () {
      callback(output);
    });

  });

};
