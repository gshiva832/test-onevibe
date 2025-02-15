const mongoose = require('mongoose')

const adminCollectionSchema = new mongoose.Schema({
    _id:{
        type:ObjectID,
        required: true
    },
    userId:{
        type:ObjectID,
        required: true
    },
    role:{
        type:String,
        enum: {values:['superAdmin','moderator']}
    },
    permissions:{
        type:String,
        enum:{values:['manage_users','manage_bookings']}
    },
    createdAt:{
        type:Date,
        default: new Date()
    }
})

module.exports = adminCollectionSchema;