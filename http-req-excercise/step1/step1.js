function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */

  var https = require('https');

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on("data", function (data) {

      // console.log('Chunk Received. Length:', data.length);
      console.log(data);
      console.log("\n");

    });


  });

}

getAndPrintHTMLChunks();