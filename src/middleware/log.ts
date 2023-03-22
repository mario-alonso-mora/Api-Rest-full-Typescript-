import { NextFunction, Request,Response } from "express"



const logMiddleware = (req:Request , resp:Response, next:NextFunction) => {

   const header = req.headers;

   const userAgent = header['user-agent']; // esto es para saber que cliente esta haciendo esta peticion 

   console.log('USER-AGENT', userAgent);

next();

}




export {logMiddleware}