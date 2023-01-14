if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}


//const declaration
const express = require("express");
const one = require("./models/one");
const path = require("path");
const app = express();
const mongoose=require('mongoose')
const port = 3000;
const bodyParser = require("body-parser");
const { name } = require("ejs");


//mongoose
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))
// mongoose.connect( "mongodb+srv://hishan:1234@cluster0.sksy2nt.mongodb.net/?retryWrites=true&w=majority");

//midddleware
app.use(express.static(path.join(__dirname, "views")));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));
app.set("view engine", "hbs");

//get reguest for /
app.get("/", (req, res) => 
   {
  res.render("login");
  });

// post request for /
app.post("/", (req, res) => {
     var name1 = req.body.name1;
     var age1 = req.body.age1;
     one.find({name:`${name1}`,age:`${age1}`}, (err, data) => {
     if (err) {
     console.log(err);
     } else {
      console.log(data);
     }
     if (data.length > 0) {
      res.render('index')
     } else {
       res.send('u have to register first')}});});
       app.get("/register", (req, res) => {
         res.render("register");
       });


// post request for register
app.post("/register", (req, res) => {
    const first = new one
    ({
    name: req.body.name,
    age: req.body.age
    });
    first.save();
    res.redirect("/");
    });

//listen
app.listen(process.env.PORT)