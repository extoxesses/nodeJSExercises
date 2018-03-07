var http = require('http');

var getTime = function() {
  var d = new Date();
  return d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ':' + d.getMilliseconds();
}// getTime

var respond = function(res, str) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(str + '\n');
  console.log(str + ' ' + getTime());
}// respond

var handleRequest = function (req, res) {
  respond(res, '<h1>Requeset time</h1><br/>' + getTime());
  // console.log('new request: ' + req.url + ' - ' + getTime());

  if(req.url == '/immediately') {
    respond(res, '<h1>Execution time</h1><br/>' + getTime());

  } else {
    var now = new Date().getTime();
    while(new Date().getTime() < now + 5000) {
      // synchronous reading of the file
    }
    respond(res, '<h1>Execution time</h1><br/>' + getTime());
  }// if-else
}// handleRequest

http.createServer(handleRequest).listen(9000, '127.0.0.1');
