const mongoose = require('mongoose')

const { Schema } = mongoose


const RegisSubject = new Schema({
    subjectId: {
        type: String,
        required: true,
    },
    faculty: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    group: {
        type: String,
        required: true, 
    },
    "sub-group" : {
        type: String
    },
    "trainning-system": {
        type: String,
    },
    day: {
        type: String,
        required: true
    },
    week: {
        type:String,
        required: true
    },
    period: {
        type:String,
        required: true
    },
    start: {
        type: String,
        default: Date.now()
    },
    end: {
        type: String,
        default: Date.now()
    },
    credits: {
        type: Number,
    },
    condition: {
        type: String,
    }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Subject', Subject)