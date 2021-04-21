var http = require('http');
var fs = require('fs');

var express = require('express');
var app = express();


app.use(express.static(__dirname + '/evo-calendar/css'));
app.use(express.static(__dirname + '/evo-calendar/js'));

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(process.env.PORT || 5000);
});
