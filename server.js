if (process.env.NODE_ENV !== 'production') 
{require('dotenv').config()}

//const declaration
const express = require("express");
const path = require("path");
const app = express();
const mongoose=require('mongoose')
const port = 3000;
const bodyParser = require("body-parser");
const loginRouter=require("./routes/login")
const registerRouter=require("./routes/register")
const authorRouter=require("./routes/authors")
const bookRouter=require("./routes/books")


//mongoose
 mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.once('open', () => console.log('Connected to Mongoose'))
db.on('error', error => console.error(error))

//midddleware
app.use(express.static(path.join(__dirname, "views")));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));
app.set("view engine", "ejs");

//routes
app.use('/', loginRouter)
app.use('/register', registerRouter)
app.use('/authors', authorRouter)
app.use('/books', bookRouter)


//listen
app.listen(process.env.PORT || port)