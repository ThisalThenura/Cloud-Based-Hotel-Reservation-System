import Room from "../models/roomModel.js";
import Hotel from "../models/hotelModel.js"

//when creating a room, It should update the hotel's room section as well.
export const createRoom = async (req, res, next) =>{
    const hotelID = req.params.hotelid;
    const newRoom = new Room(req.body);

    try{
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelID, {$push: {rooms: savedRoom._id}});
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedRoom);
    } catch (err){
        next(err);
    }
}
//UPDATE
export const updateRoom = async (req,res,next)=>{
    
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedRoom);
    } catch (err) {
        next(err); 
    }  

}
//DELETE
export const deleteRoom = async (req,res,next)=>{
    const hotelID = req.params.hotelid;
    try {
        await Room.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelID, {$pull: {rooms: req.params.id}});
        } catch (err) {
            next(err);
        }
        res.status(200).json("Room has been deleted");
    } catch (err) {
        next(err); 
    }  

}
//GET
export const getRoom = async (req,res,next)=>{

    try {
        const getRoom = await Room.findById(req.params.id);
        res.status(200).json(getRoom);
    } catch (err) {
        next(err); 
    }  

}

//GETALL
export const getAllRoom = async (req,res,next)=>{

    try {
        const getAllRoom = await Room.find();
        res.status(200).json(getAllRoom);
    } catch (err) {
        next(err); 
    }  

}