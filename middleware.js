
var express = require('express');  
var app = express();  
  
app.get('/', function(req, res) {  
  res.send('Welcome Students!');  
});  
app.get('/help', function(req, res) {  
  res.send('How can I help You?');  
});  
var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
console.log("Example app listening at http://%s:%s", host, port)  
})

/*
var express = require('express'); 
var app = express();
 //Middleware function to log request protocol
 app.use('/things', function(req, res, next){ 
console.log("A request for things received at " + Date.now()); next(); });
 // Route handler that sends the response
 app.get('/things', function(req, res){ 
res.send('Things'); }); 
app.listen(3000);
*/

/*
var express=require('express');
var app=express();
//First middleware before response is sent
app.use(function(req,res,next){
console.log("Start");
next();
});
//Route handler
app.get('/',function(req,res,next){
res.send("Middleware");
next();
});
app.use('/',function(req,res){
console.log('End');
});
app.listen(3000);
*/
