import {model, Schema} from "mongoose"

const productSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    }
})

export default model('Product', productSchema)
