var express = require('express')
var app = express();
var fs = require ('fs')

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  buffer = fs.readFileSync('index.html')
  display_on_website = buffer.toString("utf-8",0,22)
  response.send(display_on_website)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
