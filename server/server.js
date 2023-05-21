const express = require("express");
require("dotenv").config();
const cors = require("cors");
const dbConnection = require("./Database/db");
const ProductModel = require("./Models/productModel");
const ProductRoute = require("./Routes/productRoute");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/products", ProductRoute);

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>")
})

app.post("/bulkdata", async (req, res)=>{
    try{
        const data = await ProductModel.insertMany(req.body.products);
        res.send({data})
    }catch(e){
        res.status(400).send({error: e.message});
    }
})

dbConnection().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`server listening at http://localhost:${process.env.PORT}`);
    })
})
