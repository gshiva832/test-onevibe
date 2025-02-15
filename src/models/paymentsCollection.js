const mongoose = require('mongoose');

const paymentCollectionSchema = new mongoose.Schema({
    _id:{
        type:ObjectID,
        required: true
    },
    userId:{
        type:ObjectID,
        required: true
    },
    celebrityId:{
        type:ObjectID,
        required: true
    },
    serviceId:{
        type:ObjectID,
        required: true
    },
    bookingId:{
        type:ObjectID,
        required: true
    },
    amount:{
        type:Number
    },
    currency:{
        type:String
    },
    paymentMethod:{
        type:String,
        enum: {values:['wallet','card','upi','net banking']}
    },
    status:{
        type:String,
        enum:{values:['completed','failed','pending','expired']}
    },
    transactionId:{
        type:String,
        required:true,
        unique: true
    },
    paymentGateWay:{
        type:String
    },
    paymentResponse:{
        gatewayTransactionId:{type:String},
        timestamp:{type:Date,default:Date.now},
        additionalData:{type:String}
    },
    expiresAt:{
        type:Date,
        default: new Date()
    },
    createdAt:{
        type:Date,
        default: new Date()
    },
    updatedAt:{
        type:Date,
        default: new Date()
    },
})

module.exports = paymentCollectionSchema;