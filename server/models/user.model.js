// import mongoose, { Schema } from "mongoose";
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(

    {
        role: {
            type: String,
            required: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        mobile: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        company: {
            type: String,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)


const User = mongoose.model("User", userSchema)
module.exports = User
