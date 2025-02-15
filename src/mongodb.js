const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require('bcryptjs')

const connectToDb = async() => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/celebrityDatabase');
        console.log('mongodb connected')
    } catch(error){
        console.log(error)
    }
}

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

logInSchema.pre('save', async function (next){
    // const user = this

    // if(user.isModified('password')){
    //     user.password = await bcrypt.hash(user.password,8)
    // }
    console.log("just before saving")

    next()
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection

connectToDb();