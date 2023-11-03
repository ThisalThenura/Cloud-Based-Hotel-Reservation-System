import express from "express";

import {createHotel, updateHotel, deleteHotel, getHotel, getAllHotel, countByCity, countByType} from "../controllers/hotelCon.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

/*
router.get("/", (req,res)=>{
   res.send("This is hotel end point")
});
*/

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);  //need to insert unique id of table row which need to update via http request

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//everybody can get hotels

//GET
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", getAllHotel);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);


export default router;