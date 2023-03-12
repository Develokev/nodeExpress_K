const {Schema, model} = require('mongoose');

const ProductSchema = new Schema ({
    producto: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = model('Product', ProductSchema);