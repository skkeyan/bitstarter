var http = require('http');
var fs = require('fs');
var htmlfile ="index.html";

http.createServer(function(request,response) {
    var html = fs.readFileSync(htmlfile).toString();
    response.writeHead('content-type','text/plain');
    response.write(html);
    response.end();
}).listen(process.env.port || 8080);

console.log('Listening on port 8080...');

