const express=require('express')
const router= express.Router()
const mongoose=require('mongoose')
const aut = require('../models/author')


router.get("/",(req,res)=>
    {
    res.send("this  new authors") 
    })
router.get("/new",(req,res)=>
    {
    res.render("authors/add") 
    })
router.post("/new",(req,res)=>
    {
    const autho=new aut(
    {
    name:req.body.name
    })
    autho.save()
    res.send('saved')
    })


    
module.exports= router;