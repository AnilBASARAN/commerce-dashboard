import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import productRoutes from "./routes/product.routes.js"
import cartRoutes from "./routes/cart.routes.js"
import couponRoutes from "./routes/coupon.routes.js"
import { connectDB } from "./DB/connectionDB.js";
import cookieParser from "cookie-parser";

dotenv.config(); // At the top of your index.js or server.js
const app = express();
app.use(express.json()); // allows us to parse imcoming requests:req.body
app.use(cookieParser()); // allows us to parse cookies=> req.cookies.refreshToken;
const PORT = process.env.PORT || 3000 ;

app.use("/api/auth",authRoutes)
app.use("/api/products",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/coupon",couponRoutes)


app.listen(PORT,()=>{
    connectDB();
    console.log(`server is running on port ${PORT}`);
})

// added some changes