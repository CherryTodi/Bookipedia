import mongoose from "mongoose";

const userSchema=mongoose.Schema({  //we r creating thi scshema for user details
    fullname:{
        type:String,
        required:true //means it s compulsory to give this field
    },
    email:{
        type:String,
        required:true,
        unique:true  //everything shoul dbe unique
    },
    password:{
        type:String,
        required:true
    },
}); //itna data hum database mai store karan chahte hai
const User=mongoose.model("User",userSchema)  //schema ko model mai convert kraenge
export default User; //user ko export karte h
