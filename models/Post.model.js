const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
    Name : String,
    Email : String,
    Destination : String,
    Travellers : Number,
    Budget: Number

})

const postModel = mongoose.model("posts",postSchema)

module.exports = {postModel}

