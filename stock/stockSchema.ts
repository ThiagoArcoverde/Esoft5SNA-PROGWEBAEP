import {model, Schema} from "mongoose"

const stockSchema = new Schema({
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
    },
    stockValue: {
        type: Number,
        required: true
    }
})

export default model('productStock', stockSchema)