const User = require("../models/user-model");
const bcrypt=require('bcryptjs');


const home = async(req,res)=>{
    try {
        res.status(200).send('Welcome to my server by router');
    } catch (error) {
        console.log(error);
    }
}


const register= async(req,res)=>{
    try {
        const {username,email,password}=req.body;
        const userExist=await User.findOne({email:email});
        if(userExist){
            return res.status(400).json({message:"Email already exists"});  
        }
        const saltRound=10;
        const hash_password=await bcrypt.hash(password,saltRound);
        
        const data=await User.create({username,email,password:hash_password});
        res.status(200).send({msg: "registration successful",
            token:await data.generateToken(),
            userId:data._id.toString()});
       
    
    } catch (error) {
        // res.status(500).json( "Internal server error"+error);
        next(error);
    }
}

const login=async(req,res)=>{
    try {
        const {email,password} = req.body;
        //email present?
        const validUser=await User.findOne({email:email});
        if(!validUser){
            return res.status(400).json({msg: "Invalid Credentials"});
        }
        const passValid=await validUser.comparePassword(password);
        if(!passValid){
            return res.status(400).json({msg:"Wrong email or password"});
        }
        res.status(200).json({
            msg:"Login Successful",
            token: await validUser.generateToken(),
            userId: validUser._id.toString(),
        });

    } catch (error) {
        res.status(500).json( "Internal server error"+error);
    }
}
//to send user data-user logic
const user=async(req,res)=>{
    try {
        const userData=req.user;
        res.status(200).send(userData);
    } catch (error) {
        console.log(error.message);
    }
}


module.exports={home,register,login,user}