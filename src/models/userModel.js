import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: "string",
        required: [true, "Username is required"],
        unique: true,
    },
    password: {
        type: "string",
        required: [true, "Password is required"],
        unique: true,
    },
    email: {
        type: "string",
        required: [true, "Email is required"],
        unique: true,
    },
    isVerified:{
        type: "boolean",
        default: false,
    },
    isAdmin: {
        type: "boolean",
        default: false,
    },

    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
    
})

const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User