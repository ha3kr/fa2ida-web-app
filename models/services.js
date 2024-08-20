const mongoose = require('mongoose')


const ServicesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    stars: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Services", ServicesSchema);