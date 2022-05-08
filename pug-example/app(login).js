const express=require('express');
const bodyparser=require("body-parser")
const bcrypt=require("bcrypt");
const user=require('./models/user');
const mongoose = require('mongoose');
const expressValidator = require("express-validator");
const {check, validationResult} = require('express-validator/check')
const app = express();
const port = process.env.PORT || 80
mongoose.connect("mongodb://localhost:27017/user");
app.set('view engine', 'pug');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
//handling get request
app.get('/',function(req,res){
res.render('login')
})
app.get('/Login',function(req,res){
 res.render('Login')
 })
//handling post request
 app.post('/Login',function(req,res){


user.findOne({username:req.body.username},function(err,docs){
 if(err)
 {
 console.log(err)

 }
 else
 {
    if(docs.username==req.body.username)
    {
   
   bcrypt.compare(req.body.password,docs.password,function(err,data)
    {
    if(err)
    {
    console.log(err);
    }
    if(data)
    {
    console.log(data);
    res.send("Welcome");
    }
    else
    {
    res.send("invalid password");
    }
    });
  }
    else
    {
    //res.send("invalid username or password")
    res.redirect("Register");
    }
    }
    })
   
    })
   
   app.listen(port,() => {console.log(`app is listening on
   http://localhost:${port}`)})