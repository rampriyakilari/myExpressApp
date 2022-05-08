var express = require('express');
var app = express();

app.get('/dynamic_view', function(req, res){
   res.render('dynamic', {
      name: "Pug Template", 
      url:"http://www.pugjs.org"
   });
});

app.listen(3000);