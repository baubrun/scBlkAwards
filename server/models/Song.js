const mongoose = require("mongoose")
const Schema = mongoose.Schema


const SongSchema = new Schema({
    album: {
        type: String,
        // required: true
    },
    author: {
        type: String,
        // required: true
    },
    image: {
        type: String,
        // required: true
    },
    title: {
        type: String,
        // required: true
    },
    file: {
        type: String,
        // required: true
    },
    text: {
        type: String,
        // required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("Song", SongSchema)