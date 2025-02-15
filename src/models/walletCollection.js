const mongoose = require('mongoose');

const walletCollectionSchema = new mongoose.Schema({
    _id:{
        type:ObjectID,
        required: true
    },
    userId:{
        type:ObjectID,
        ref:"userCollection",
        required: true
    },
    balance:{
        type:Number
    },
    currency:{
        type:String
    },
    lastUpdated:{
        type:Date,
        default: new Date()
    },
    transactions:[
        {
            transactionID:{
                type:ObjectID
            },
            amount:{
                type:Number
            },
            Type:{
                type:String,
                enum:{values:['credit','debit']}
            },
            status:{
                type:String,
                enum:{values:['pending','completed','failed']}
            },
            timestamp:{
                type:Date,
                default: new Date()
            }
        }
    ]
})

module.exports = walletCollectionSchema;