const mongoose = require('mongoose')

const { Schema } = mongoose

const Activity = new Schema({
    title: {
        type: String,
        required: true
    },
    reminder: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: 'transparent'
    }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Activity', Activity)
