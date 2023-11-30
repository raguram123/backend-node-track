import express from "express"
import bcrypt from 'bcrypt'
import { generateToken, getUserByEmail } from "../controllers/user.js";
import User from "../models/user.js";

const router = express.Router();

//login 
router.post("/login" ,async (req,res) => {
    try {
    const user = await getUserByEmail(req)
    if(!user) {
        return res.status(401).json({msg: "Invalid email or password"})
    }  
    //Validate Password
    const validatePassword = await bcrypt.compare(
        req.body.password,
        user.password
    )
        if(validatePassword){
        return res.status(401).json({msg: "Invalid email or password"})

        }
        //Generate Password
        const token = generateToken(user._id)
        res.status(200).json({message:"Logged In",token})
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Internal server"})

    }

})

//signup
router.post("/signup" ,async (req,res) => {
    
    try {
        let user = await getUserByEmail(req);
        if(user){
            res.status(400).json({error:"Already Exits"});
        }
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        user = await new User({
            ...req.body,
             password : hashedPassword,
        }).save();

        //generate token
        const token = generateToken(user._id)
        res.status(201).json({message : 'Registered ',
        token,
    })
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Internal server"})

        
    }    

})


export const  userRouter = router ;