var http = require('http');
var fs = require('fs');

function readFile(res, filename){
  fs.readFile(filename, function(err, data){
    res.write(data.toString());
    res.end();
  })
}


var server = http.createServer(function (req, res){
  var url = req.url;

  if(url === '/') readFile(res, 'index.html');
  else if (url === '/page-2') readFile(res, 'page-2.html');
  else if (url === '/page-3') readFile(res, 'page-3.html');
  else if (url === '/main.css') readFile(res, 'main.css');
  else if (url ==='/app.js') readFile(res, 'app.js');
  else {
    res.write('<h1>404</h1>')
    res.end();
  }
});

server.listen(3000, function (){
  console.log("Best Gif Ever Server is running on port 3000")
});