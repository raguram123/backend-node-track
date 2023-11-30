import product from "../models/product.js"

export  function  getAllProducts () {

   return   product.find()
    .populate( "user", "username")
}