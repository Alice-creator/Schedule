const mongoose = require('mongoose')

const { Schema } = mongoose

const User = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true, 
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    imageUrl: {
        type:String,
    },
    isAdmin: {
        type: Boolean,
        // required: true
    },
    subjects: {
        type: []
    },
    favourite: {
        type: []
    },
    storage: {
        type: []
    },
    activity: {
        type: []
    },
    notification: {
        type: []
    },
    },
    { timestamps: true }
)

module.exports = mongoose.model('User', User)