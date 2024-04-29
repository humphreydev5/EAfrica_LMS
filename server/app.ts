require('dotenv').config();
import express, { NextFunction, Response, Request } from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import {ErrorMiddleware} from "./middleware/error";
import userRouter from "./routes/user_routes";


//body parser
app.use(express.json({limit: "50mb"}));

//cookie parser
app.use(cookieParser());

//cors => cross origin sharing
app.use(cors({
  origin:process.env.ORIGIN,
}));

// routes
app.use("/api/v1",userRouter)

//testing api
app.get("/test", (req:Request, res:Response, next:NextFunction)=>{
  res.status(200).json({
    success:true,
    message: "Api is working", 
  });
});

//handle unknown route
app.all("*", (req:Request, res:Response, next:NextFunction)=>{
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});


app.use(ErrorMiddleware);