const mongoose = require('mongoose')

const planCollectionSchema = new mongoose.Schema({
    _id:{
        type:ObjectID,
        required: true
    },
    name:{
        type:String
    },
    prise:{
        type:Number
    },
    duration:{
        type:Number
    },
    features:{
        type:String,
        enum:{values:['priority bookings','Exclusive Access']}
    },
    createdAt:{
        type:Date,
        default: new Date()
        
    }
})

module.exports = planCollectionSchema;