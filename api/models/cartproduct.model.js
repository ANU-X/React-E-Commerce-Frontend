import mongoose from "mongoose";
import { captureOwnerStack } from "react";


const cartProductSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        default: 1
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
})

const cartProductModel = mongoose.model('cartProduct', cartProduct);

export default cartProductModel;
