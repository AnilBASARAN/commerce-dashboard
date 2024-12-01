import Product from "../models/product.model.js";

export const getAllProducts = async(res,req)=>{
 try{
    const products = await Product.find({}); // find all products
    res.json({products})
 }catch(error){
    console.log("Error in getAllProducts controller",error.message);
    res.status(500).json({message:"Server error",error:error.message});
 }
}