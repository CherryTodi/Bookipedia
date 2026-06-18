import express from 'express'; 
import {getBook} from '../controller/book.controller.js';

const router=express.Router(); //create an express router

router.get("/",getBook); //jab hum get request kre / is url mai then controller ka get function run hona chahiye
//api

export default router;