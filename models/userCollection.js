const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    phoneNumber:{
        type:Number,
        required: true,
        maxLength : 13
    },
    email:{
        type:String,
        trim:true,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    otp:{
        type:String,
        required:true
    },
    otpExpire: {
        type: Date,
        required: true,
        default: () => new Date(Date.now() + 5 * 60 * 1000), 
      },
    name:{
        type:String,
        required: true,
        maxLength:20
    },
    role:{
        type:String,
        enum: {
            values:['user','celebrity','admin']
        }
    },
    gender:{
        type:String,
        enum: {
            values:['male','female']
        }
    },
    profilePic:{
        type:String
    },
    isVerified:{
        type:Boolean,
        default: false
    },
    isDeleted:{
        type:Boolean,
        default: false
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

// userSchema.pre('save', function(next) {
//     var user = this;

//     // only hash the password if it has been modified (or is new)
//     if (!user.isModified('otp')) return next();

//     // generate a salt
//     bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//         if (err) return next(err);

//         // hash the otp using our new salt
//         bcrypt.hash(user.otp, salt, function(err, hash) {
//             if (err) return next(err);
//             // override the cleartext otp with the hashed one
//             user.otp = hash;
//             next();
//         });
//     });
// });

module.exports = mongoose.model('user',userSchema);