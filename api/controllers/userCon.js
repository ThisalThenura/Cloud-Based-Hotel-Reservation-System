import User from "../models/userModel.js";

/*
//CREATE
export const createUser = async (req,res,next)=>{
  
    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        next(err); 
    }  

}
*/

//UPDATE
export const updateUser = async (req,res,next)=>{

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedUser);
    } catch (err) {
        next(err); 
    }  

}
//DELETE
export const deleteUser = async (req,res,next)=>{
  
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
    } catch (err) {
        next(err); 
    }  

}
//GET
export const getUser = async (req,res,next)=>{

    try {
        const getUser = await User.findById(req.params.id);
        res.status(200).json(getUser);
    } catch (err) {
        next(err); 
    }  

}

//GETALL
export const getAllUser = async (req,res,next)=>{

    try {
        const getAllUser = await User.find();
        res.status(200).json(getAllUser);
    } catch (err) {
        next(err); 
    }  

}