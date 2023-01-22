const express=require('express')
const author = require('../models/author')
const router= express.Router()
const aut = require('../models/author')


router.get("/",async (req,res)=>{
    let searchOptions={}
    if(req.query.name!=null && req.query.name != "")
    {
        searchOptions.name=new RegExp(req.query.name,"i")
    }
    try{
    const authors= await author.find(searchOptions)
    res.render("authors/author",{
    authors: authors,
    searchOptions:req.query
    })
    }catch{
        res.send("an error has occured")
    }})







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
    res.redirect("/authors")
    })

module.exports= router;
