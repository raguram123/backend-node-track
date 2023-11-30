import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import { dataBaseConnection } from './db.js'
import {  userRouter } from "./routes/user.js";
import { productRouter } from "./routes/product.js";
import { isAuthorized } from "./middleware/auth.js";



//Congiguration
dotenv.config();

//server Setup
const app = express();
const PORT = process.env.PORT



// Middlewares

app.use(express.json());
app.use(cors());

dataBaseConnection();

//routes

app.use("/api/user" ,userRouter)
app.use("/api/product"   ,isAuthorized,productRouter)
 






app.get("/", (req, res) => {
    return res.send({ message: "Inventory App" });
 
    });
  
  
  
  // Here we are listening to the server
  app.listen(PORT, () => {
    console.log(`Server is running in the port ${PORT}`);
  });