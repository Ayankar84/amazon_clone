const express = require("express");
const ProductModel = require("../Models/productModel");

const ProductRoute = express.Router();

ProductRoute.get("/alldata", async (req, res)=>{
    try{
        const data = await ProductModel.find();
        res.send({data});
    }catch(e){
        res.status(400).send(data);
    }
})

module.exports = ProductRoute;