const express=require('express')
const router= express.Router()
const mongoose=require('mongoose')
const aut = require('../models/books')


router.get("/",(req,res)=>
    {
        res.render("books/books") 
    })
router.get("/new",(req,res)=>
    {
    res.render("books/new") 
    })
// router.post("/new",(req,res)=>
//     {
//     const autho=new aut(
//     {
//     name:req.body.name
//     })
//     autho.save()
//     res.send('saved')
//     })


    
module.exports= router;