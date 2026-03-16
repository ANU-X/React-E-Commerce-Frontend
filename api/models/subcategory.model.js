import mongoose from "mongoose";


const subcategorySchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    category: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'category'
        }
    ]
})

const subcategoryModel = mongoose.model('subcategory', subcategorySchema);

export default subcategoryModel;