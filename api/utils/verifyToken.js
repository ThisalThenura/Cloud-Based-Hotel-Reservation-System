import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next)=>{
    const token = req.cookies.token;
    if(!token){  //if you don't have a token
        return next(createError(401, "You are not authenticated !"));
    }

    jwt.verify(token, process.env.JWT, (err, jwtSignedUserInfo)=>{
        if(err) return next(createError(403, "Your token is not valid !"));
        req.user = jwtSignedUserInfo;  //jwt signed user info puting to a user object
        next()
    });
};

export const verifyUser = (req, res, next)=>{
    verifyToken(req, res, next, ()=>{
       if(req.user.id == req.params.id || req.user.isAdmin){//check that user object's id is equals to input user id from http req or user is admin
        next();
       } else{
        return next(createError(403, "You are not authorized !"));
       }
    })
};

export const verifyAdmin = (req, res, next)=>{
    verifyToken(req, res, next, ()=>{
       if(req.user.isAdmin){//check user is admin
        next();
       } else{
        return next(createError(403, "You are not authorized !"));
       }
    })
};

