import mongoose from 'mongoose'
const Schema = mongoose.Schema;

let Extra = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    amount: {
        type: Number
    }
})

export default mongoose.model('ExtraModel', Extra, 'extras');