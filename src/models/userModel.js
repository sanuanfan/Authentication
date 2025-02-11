import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: [true,"Please enter a username"],
        unique: true
    },
    email : {
        type: String,
        required:[true,"Please enter a email address"],
        unique: true
    },
    password : {
        type: String,
        required: [true,"Please enter a password"],
    },
    isverified:{
        type: Boolean,
        default: false
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    forgotPasswordToken : String,
    forgotPasswordTokenExpiryt : Date,
    verifyToken:String,
    verifyTokenExpiryt:Date,
});

const User = mongoose.models.User || mongoose.models("users",userSchema);

export default User;