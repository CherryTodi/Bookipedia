//import model as data toh hume wai store karna h
import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
export const signup=async (req,res)=>{
    try{
        const {fullname,email,password}=req.body;  //yeh sab hme body se milega
        const user=await User.findOne({email}) //hum ek variable lenge user naam ka and find karenge if user exists or not
        if(user){  //jo email se login krra h body mai agar wo already exist krt ah so error 400 dnege
            
            return res.status(400).json({message:"User already exists"}) //display this in frontend if incorrect data is enetered
        }
        //lets secure the password before sending that is hash password
        const hashPassword= await bcryptjs.hash(password,10) //we need atleast 10 letters in password

        const createdUser=new User({ //agar user exist nai krta h toh create karayenge and daatbase mai store kareneg
            fullname:fullname,
            email:email,
            password:hashPassword,
        });
        await createdUser.save()//yeh save hojayega //User wale collection mai save hoga //as definitely user collection bh9 exist karega jaha user data hoga //jab daatbase save karare ho tabhi await ka use karo
        res.status(201).json({message:"User created successfully",
             user: {
              _id: createdUser._id,
             fullname: createdUser.fullname,
             email: createdUser.email,
        },
            
        });

    }catch (error){
        console.log("Error: " + error.message);
        res.status(500).json({message:"Internal server error"});

    }
};

//do samefor login
//concept of promise
export const login=async (req,res)=>{
    try{
        const {email,password}=req.body;  //yeh sab hme body se milega//email and passowrd jo user dega
        const user=await User.findOne({email}) //hum ek variable lenge user naam ka and find karenge if user exists or not
        const isMatch=await bcryptjs.compare(password,user.password)//comapare the password entered by user and password stored in database
        //we are using async await as we are comapring the passwords so it take stime to return so wait until it returns back
        //without async any password will get accepted
        if(!user||!isMatch){ //if useremail or password any one of them doesnot match then return invalid
            return res.status(400).json({message:"Invalid username or password"});
        }else{
            res.status(200).json({message:"Login successful",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
                //if all info are correct then return them
            }})
            
        }
        
    }catch (error){
        console.log("Error: " + error.message);
        res.status(500).json({message:"Internal server error"}); //this message will be showm usimg frontend in signup.jsx
    }
}