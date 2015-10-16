var express = require('express');
var http = require('http');

var app = express();
var server = http.Server(app);
server.listen(3000);


app.get('/', function(req, res){
    //aaaaa
});
