const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser');

// import mongoose
const mongoose = require('mongoose');

//import express validator 
const expressValidator = require('express-validator')
// load env variables
const dotenv = require('dotenv');
dotenv.config()
 
//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error a: ${err.message}`)
});




//Post route
const postRoutes = require('./routes/post')

 
//middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(expressValidator())
app.use('/', postRoutes)
 

const port =1234
app.listen(port, ()=>{
    console.log(`Node API running on port ${port}`)
} )