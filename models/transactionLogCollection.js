const mongoose = require('mongoose');

const transactionLogSchema = new mongoose.Schema({
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
    bookingId:{
        type:ObjectID,
        required: true
    },
    serviceId:{
        type:ObjectID,
        required: true
    },
    paymentId:{
        type:ObjectID,
        required: true
    },
    amount:{
        type:Number
    },
    currency:{
        type:String
    },
    transactionType:{
        type:String
    },
    type:{
        type:String,
        enum:{value:['credit','debit','refund']}
    },
    source:{
        type:String,
        enum:{values:['wallet','card','upi','net banking']}
    },
    status:{
        type:String,
        enum:{values:['pending','completed','failed']}
    },
    transactionID:{
        type:String,
        unique:true
    },
    referenceId:{
        type:String
    },
    adminModified:{
        type:Boolean
    },
    modificationReason:{
        type:String,
        enum:{values:['User Dispute','Payment GateWay Failure']}
    },
    notes:{
        type:String
    },
    createdAt:{
        type:Date,
        default: new Date()
    },
    updatedAt:{
        type:Date,
        default: new Date()
    }
})

module.exports = transactionLogSchema;