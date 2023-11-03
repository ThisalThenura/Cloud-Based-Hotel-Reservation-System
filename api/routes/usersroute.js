import express from "express";

import {updateUser, deleteUser, getUser, getAllUser} from "../controllers/userCon.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


const router = express.Router();

/* //route check
router.get("/", (req,res)=>{
   res.send("This is users end point")
});
*/

/*
router.get("/checkAuth", verifyToken, (req, res, next)=>{
   res.send("You are logged in");
})

router.get("/checkUser/:id", verifyUser, (req, res, next)=>{
   res.send("You are logged in. You can delete acc");
})

router.get("/checkAdmin/:id", verifyAdmin, (req, res, next)=>{
   res.send("You are logged in. You can delete all acc");
})
*/

//UPDATE
router.put("/:id", verifyUser, updateUser); 

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getAllUser);

export default router;