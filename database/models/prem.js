const mongoose = require('mongoose')

let Schema = new mongoose.Schema({
    Guild: String,
        Expire: Number,
        Permamenet: Boolean,
})

module.exports = mongoose.model('premium-guild', Schema)