var http = require('http');
var fs = require('fs');


fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(process.env.PORT || 5000);
});

app.use(express.static(__dirname + '/evo-calendar'));