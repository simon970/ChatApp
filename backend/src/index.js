import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser"
dotenv.config(); 
const app= express();


app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);


app.listen("3000" ,()=>{
    console.log(`App is listening on PORT: 3000`);
    connectDB();
});
