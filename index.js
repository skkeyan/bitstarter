var express = require('express');
var fs = require('fs');
var connect = require('connect');
var htmlfile = "index.html";

var app = connect.createServer(connect.logger());

app.get('/',function(request,response){
    var html = fs.readFileSync(htmlfile).toString();
    response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port,function(){
    console.log("Listening on "+ port);
});
