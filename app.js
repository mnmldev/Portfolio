var express = require('express');
var sassMiddleware = require('node-sass-middleware');
var app = express();

app.use(
     sassMiddleware({
         src: __dirname + '/sass', //where the sass files are
         dest: __dirname + '/public/css', //where css should go
         debug: true // obvious
      })
);

app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
  console.log('Listen port 3000...');
});
