var express = require('express');
var app = express();

app.listen(3040);
app.get('/bundle.js',function(req,res){
	res.sendFile(__dirname+'/bundle.js');	
});

app.get('*',function(req,res){
	res.sendFile(__dirname+'/index.html');	
});