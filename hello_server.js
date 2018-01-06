var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send("Hello World");
});

// app.get('/:firstname/:lastname', function(request, response) {
//     var first = request.params.firstname;
//     var last = request.params.lastname;
//     response.send(["Hello", first, last].join(" "));
// });
//
// app.get('/jedi/:firstname/:lastname', function(request, response) {
//     var first = request.params.firstname;
//     var last = request.params.lastname;
//     var jedi = last.slice(0, 3) + first.slice(0, 2);
//     response.send(["Hello", jedi].join(" "));
// });
//
// app.get('/response', function(request, response) {
//     response.json({
//         name: 'Kim Gordon',
//         instrument: 'Bass'
//     });
// });

app.get('/headers', function(request, response) {
  var header = request.rawHeaders;
  response.send(header);
});

app.get('/headers/:header_name', function(request, response) {
  var headerName = request.params.header_name;
  var header = request.rawHeaders;
  var index = header.indexOf(headerName);
  response.send(header[index+1]);
});

app.listen(process.env.PORT || 8080, process.env.IP);
