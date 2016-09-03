var http = require('http');
var fs = require('fs');


var server = http.createServer(function (req, res){
  var url = req.url;

  if(url === '/'){
    fs.readFile('./index.html', function(err, data){
      res.write(data.toString());
      res.end();
    })
  } else if (url === '/page-2'){


  } else if (url === '/page-3'){


  } else if (url === '/main.css') {

  } else if (url ==='/app.js'){

  }else {
    res.write('<h1>404</h1>')
    res.end();
  }
});

server.listen(3000);