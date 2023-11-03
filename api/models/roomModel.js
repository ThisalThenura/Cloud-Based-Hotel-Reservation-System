import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required:true
        },
        price:{
            type: Number,
            required:true,
        },
        maxPeople:{
            type: Number,
            required:true,
        },
        description:{
            type: String,
            required:true
        },
        roomNumbers: [{number:Number, unavailableDates: { type: [Date] } }]
    },

    {timestamps: true}

);

/* array like this will be created
[
    {number:101,unavailableDates:[20231008, 20231103]}
    {number:102,unavailableDates:[20231008]}
    
]
*/

export default mongoose.model("Room", RoomSchema);