/**
 * Created by raghu on 3/1/14.
 */

/**
 * learning series name : nymyway
 * episode 1 : hello world
 * */
var http = require('http');

http.createServer(function (req, res) {
console.log("Hello word");
res.end();
}).listen(Number(process.env.PORT || 5000));
console.log('Server running at http://127.0.0.1:3000/');