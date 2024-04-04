import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
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
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", UserSchema)