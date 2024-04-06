// import mongoose, { Schema } from "mongoose";
const mongoose = require('mongoose')

const instructorSchema = new mongoose.Schema(

    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        course: {
            type: String,
        },

    },
    {
        timestamps: true
    }
)


const Instructor = mongoose.model("Instructor", instructorSchema)
module.exports = Instructor
