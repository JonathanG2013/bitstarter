var express = require('express');
bar buffer = new Buffet();
buffer = fs.readFile(index.html);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
