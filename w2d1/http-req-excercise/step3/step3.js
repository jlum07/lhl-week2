function getAndPrintHTML (options) {

  /* Add your code here */
  var https = require('https');

    https.get(options, function (response) {

    response.setEncoding('utf8');

    var output = "";

    response.on('data', function (data) {
      output += data + "\n";
    });

    response.on('end', function () {
      console.log(output);
    });

  });



}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);