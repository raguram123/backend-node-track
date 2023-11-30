import express, { Router } from "express"
import { getAllProducts } from "../controllers/purchase.js";
import purchase from "../models/purchase.js";

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




export const productRouter = router;
