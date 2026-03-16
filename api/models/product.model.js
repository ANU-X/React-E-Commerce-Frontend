import mongoose from "mongoose";


const productShema = new mongoose.Schema({
    name: {
        type: String,
    },
    image: {
        type: Array,
        default: []
    },
    category: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'subcategory'
        }
    ],
    unit: {
        type: String,
        default: ''
    },
    stock: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: null
    },
    description: {
        type: String,
        default: ''
    }
})

const ProductModel = mongoose.model("Product", productShema)

export default ProductModel;
