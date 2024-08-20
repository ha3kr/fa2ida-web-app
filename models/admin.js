const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model("Admin", AdminSchema);