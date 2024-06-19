import mongoose from 'mongoose'
const Schema = mongoose.Schema;

let Order = new Schema({
    id: {
        type: Number
    },
    user: {
        type: String
    },
    size:{
        type: String
    },
    status: {
        type: String
    },
    extras: {
        type: Array
    }
})

export default mongoose.model('OrderModel', Order, 'orders');