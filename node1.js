var http = require('http');
var dt=require('./export');

http.createServer(function (req, res) {
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("sum : "+ dt.sum()+"<br>"+ "avg : "+dt.avg());
  res.end();
}).listen(8080);
