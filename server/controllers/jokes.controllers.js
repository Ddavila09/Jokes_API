const Jokes = require("../models/jokes.models")


module.exports.apiTest = (req, res)=>{
    res.json({message: "Hello World!"})
}


module.exports.allJokes = (req, res)=>{
    Jokes.find()
    .then((allJokes)=> {res.json({results: allJokes})})
    .catch(err => res.json({err: err}))
    
}

module.exports.createJoke = (req, res)=>{
    Jokes.create(req.body)
    .then((newJoke)=>{res.json({results: newJoke})})
    .catch(err => res.json({err: err}))
}

module.exports.oneJoke = (req, res)=>{
    Jokes.findOne({_id: req.params.id})
    .then(joke => {res.json({results: joke})})
    .catch(err => res.json({err: err}))
}

module.exports.updateJoke = (req, res)=>{
    Jokes.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updatedJoke => {res.json({results: updatedJoke})})
    .catch(err => res.json({err: err}))
}

module.exports.deleteJoke = (req, res)=>{
    Jokes.deleteOne({_id: req.params.id})
    .then(deletedJoke => {res.json({results: deletedJoke})})
}