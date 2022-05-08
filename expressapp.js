var express = require('express');  
var app = express();  

app.get('/', function (req, res) {  
   res.send('Welcome to Express.js');  
})  
 
app.listen(3000, () => console.log('Example app is listening on port 3000.'));