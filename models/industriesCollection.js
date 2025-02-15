const mongoose = require('mongoose');

const industrySchema = new mongoose.Schema({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
        required: true
    },
    name:{
        type:String,
        enum : { values: ['Tollywood','Bollywood']}
    },
    description:{
        type:String,
        default:'Indian Film Industry'
    },
    celebritiesCount:{
        type:Number,
        default:500
    },
    createdAt:{
        type:Date,
        default: new Date()
    }
})

module.exports = mongoose.model('industry',industrySchema)