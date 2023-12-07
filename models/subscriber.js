const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Descripcion:{
        type: String,
        required: true
    },
    Anime:{
       type: String,
       required: true
    }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)
