
import express, { Router } from "express"
import { getAllProducts } from "../controllers/product.js";
import product from "../models/product.js";

const router =  express.Router();

//Get All Products 
router.get("/all", async (req, res) => {

    try {
        const Product = await  getAllProducts();
        if (!Product) return res.status(401).json({message: 'No products found'});

        res.status(200).json(
            {
                data : product,
            }
        )
    } catch (error) {
        console.log(error)
        res.status(500).json(
            {
                error: "Internal Server"
            }
        )
        
    }

})

//Get New Products 
router.get("/new/all", (req, res) => {

    try {
        
    } catch (error) {
        
    }

})


export const productRouter = router;
