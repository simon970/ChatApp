import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
dotenv.config(); 
const app= express();


app.use(express.json());
app.use("/api/auth",authRoutes);

app.listen("3000" ,()=>{
    console.log(`App is listening on PORT: 3000`);
    connectDB();
});
