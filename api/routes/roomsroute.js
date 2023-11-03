import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from "../controllers/roomCon.js";

const router = express.Router();

/*check route
router.get("/", (req,res)=>{
   res.send("This is rooms end point")
});
*/

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/:id", verifyAdmin, updateRoom);  //need to insert unique id of table row which need to update via http request

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//everybody can get rooms

//GET
router.get("/:id", getRoom);

//GET ALL
router.get("/", getAllRoom);


export default router;