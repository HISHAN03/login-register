const express=require('express')
const router= express.Router()
const one = require('../models/one')

//get request
router.get("/", (req, res) => 
     {
     res.render("login");
     });
//post
router.post("/", (req, res) => {
     var name1 = req.body.name1;
     var age1 = req.body.age1;
     one.find({name:`${name1}`,age:`${age1}`}, (err, data) => {
     if (err) 
     {
     console.log(err);
     } else 
     {
      console.log(data);
     }
     if (data.length > 0) 
     {
      res.render('index')
     } else 
     {
     res.send('u have to register first')}});});
     router.get("/register", (req, res) => {
     res.render("register");
     });

module.exports= router;