const {Schema, model} = require('mongoose');

const UserSchema = new Schema ({
    user: {
        type:String,
        required:true,
        trim:true
    },
    email: {
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password: {
        type:String,
        trim:true,
        required:true
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = model('User', UserSchema);