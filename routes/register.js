const express=require('express')
const router= express.Router()
const one = require('../models/one')

//post
router.post("/", (req, res) => {
    const first = new one
    ({
    name: req.body.name,
    age: req.body.age,
    age2:req.body.age2
    });
    let age= req.body.age;
    let age2 =req.body.age2;
    if(age==age2)
    {
    first.save();
    res.redirect("/");
    }
    else
    {
    res.send('wrong password')
    }});

module.exports= router;