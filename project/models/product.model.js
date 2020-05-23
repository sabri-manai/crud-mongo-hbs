const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    productID : {
        type: String,
    },
    item: {
        type: String
    },
    price: {
        type: String
    },
    quantity: {
        type: String
    },
    size: {
        type: String
    }
});


mongoose.model('Product', productSchema);