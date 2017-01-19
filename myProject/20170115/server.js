/**
 * Created by jintae on 2017-01-19.
 */
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
   fs.readFile('./index.html', 'utf8', function(err, data){
       if(err) throw new Error('read Err');
       res.end(data);
   });
});

server.listen('8888');
console.log('Listening on port 8888');

