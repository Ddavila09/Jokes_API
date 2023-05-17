const mongoose = require("mongoose")

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        minlength: [10]
    },
    punchline:{
        type: String,
        minlength: [3]
    }
})

const Jokes = mongoose.model("Jokes", JokesSchema);

module.exports = Jokes;