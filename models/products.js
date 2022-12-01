const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    img:{
        type: String
    }

})

const Product = mongoose.model ('Product', storeSchema);
module.exports = { Product };