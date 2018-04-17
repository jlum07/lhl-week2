function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };



  /* Add your code here */
  var https = require('https');

  https.get(requestOptions, function (response) {

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

getAndPrintHTML();