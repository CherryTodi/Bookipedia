//route define ke liye sabse pehle humare pass express hona chhaiye
import express from 'express';
import {signup,login} from "../controller/user.controller.js";  //signup function chahiye hume jo controller pe hai
const router=express.Router()

router.post("/signup",signup);   //signup pe func chalna chhaiye jo humne controller pe define kra
router.post("/login",login); 
export default router;