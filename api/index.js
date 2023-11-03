import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import authRoute from "./routes/authroute.js";
import hotelsRoute from "./routes/hotelsroute.js";
import roomsRoute from "./routes/roomsroute.js";
import usersRoute from "./routes/usersroute.js";

import cors from "cors";

const app = express();
dotenv.config();

//function will connect to the DB again if the DB network interrupted.
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to mongoDB")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongo disconnected")
})

mongoose.connection.on("connected", ()=>{
    console.log("mongo connected bitch!")
})

/*
app.get("/users", (req,res)=>{
    res.send("hello hi people !");
})
*/

//middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/room", roomsRoute);
app.use("/api/user", usersRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.errorMessage || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

//main program
app.listen(8800, ()=>{
    connect();
    console.log("conected to backend !");
});

