const mongoose =  require('mongoose')

const subscriptionSchema = new mongoose.Schema({
    _id:{
        type:ObjectID,
        required: true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userCollection",
        required: true
    },
    planId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'plansCollection',
        required: true
    },
    status:{
        type:String,
        enum:{values:['active','expired','canceled']}
    },
    startDate:{
        type:Date,
        default: new Date()
    },
    expiryDate:{
        type:Date,
        default: new Date()
    },
    autoRenew:{
        type:Boolean,
        default:true
    },
    paymentId:{
        type:mongoose.Schema.Types.ObjectID,
        ref:'paymentsCollection'
    },
    createdDate:{
        type:Date,
        default: new Date()
    }
})

module.exports = subscriptionSchema;