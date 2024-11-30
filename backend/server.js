import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import { connectDB } from "./DB/connectionDB.js";
import cookieParser from "cookie-parser";
dotenv.config(); // At the top of your index.js or server.js
const app = express();
app.use(express.json()); // allows us to parse imcoming requests:req.body

const PORT = process.env.PORT || 3000 ;

app.use("/api/auth",authRoutes)


app.listen(PORT,()=>{
    connectDB();
    console.log(`server is running on port ${PORT}`);
})

// password: YrIBCOO7bDHZJQnc