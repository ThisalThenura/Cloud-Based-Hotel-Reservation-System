import express from "express";

import { register, login } from "../controllers/authCon.js";

const router = express.Router();

/*
route check
router.get("/", (req,res)=>{
   res.send("This is auth end point")
});
*/
router.post("/register", register);
router.post("/login", login);

export default router;