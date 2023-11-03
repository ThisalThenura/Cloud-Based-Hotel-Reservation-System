import User from "../models/userModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const register = async (req,res,next)=>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,               // hash of the password is stored in the DB
        })

        await newUser.save()
        res.status(200).send("user has been created")
    } catch (err) {
        next(err);
    }
}

export const login = async (req,res,next)=>{

    try {
        const user = await User.findOne({username:req.body.username})
        if(!user) return next(createError(404, "user not found"));

        const ifpassCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!ifpassCorrect) 
            return next(createError(400, "wrong password"));

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT); //generate a token for user.
    
        const {password, isAdmin, ...otherDetails} = user._doc;   //not showing the password and isAdmin status

        res.cookie("token", token, {httpOnly:true}).status(200).json({...otherDetails}); //user information sending as a cockie with json web token
        //why httpOnly? more secure

        //res.status(200).json({...otherDetails});

    } catch (err) {
        next(err);
    }
}