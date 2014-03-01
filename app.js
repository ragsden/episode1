/**
 * Created by raghu on 3/1/14.
 */
var http = require('http');

http.createServer(function (req, res) {
console.log("request is being processed");
res.end();
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');