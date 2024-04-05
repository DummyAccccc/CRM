// import mongoose, { Schema } from "mongoose";
const { MongoCursorInUseError } = require('mongodb')
const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema(

    {
        title: {
            type: String,
        },
        desc: {
            type: String,
        },
        pre: {
            type: String,
        },
        criteria: {
            type: String,
        },

    },
    {
        timestamps: true
    }
)


const Course = mongoose.model("Course", courseSchema)
module.exports = Course
