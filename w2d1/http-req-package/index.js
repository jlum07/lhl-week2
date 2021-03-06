// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')                 // Note 1
       .on('error', function (err) {                                                // Note 2
         throw err;
       })
       .on('response', function (response) {                                        // Note 3
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response Status Message: ', response.statusMessage);
         console.log('Response Header Type: ', response.headers['content-type']);
         console.log(response.headers);
       })
       .on('end', function (end) {
          console.log('Downloading image...');
          // console.log('Download complete.');
       })
       .pipe(fs.createWriteStream('./future.jpg'))                                  // Note 4
       .on('finish', function (finish) {
          console.log('Download complete.');
       });


// Notes:
// 1. `request.get` is equivalent to `request()`
// 2. `request.on('error', callback)` handles any error
// 3. `request.on('response, callback)` handles the response
// 4. `.pipe(fs.createWriteStream('./future.jpg'))` copys jpg to folder
