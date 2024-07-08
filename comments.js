// Create web server
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    var data = fs.readFileSync("comments.html");
    response.write(data);
    response.end();
});
server.listen(8000);
console.log("Server is running at http://localhost:8000");
