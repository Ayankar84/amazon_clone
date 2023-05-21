const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    { 
        id: {type: String, required: true},
        url: String, 
        detailUrl: String, 
        title: {
            shortTitle: String,
            longTitle: String
        }, 
        price: {
            mrp: Number,
            cost: Number,
            discount: String
        },
        description: String,
        discount: String, 
        tagline: String 
    }
)

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;