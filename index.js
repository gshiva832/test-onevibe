const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Connection from Mongoose to mongodb

const connectToDb = async() => {
    try{
        await mongoose.connect('mongodb://localhost:27017/celebrityDatabase');
    } catch(error){
        console.log(error)
    }
}

connectToDb();

const port = 3000;
app.listen(port, ()=>{
    console.log('Server started!')
})
