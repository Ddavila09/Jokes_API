const JokesController = require('../controllers/jokes.controllers')

module.exports = (app)=>{

    // app.get("/api/testing", UserController.apiTest)

    app.get("/api/jokes", JokesController.allJokes)
    
    app.post("/api/jokes", JokesController.createJoke)

    app.get("/api/jokes/:id", JokesController.oneJoke)


    app.patch("/api/jokes/:id", JokesController.updateJoke)

    app.delete("/api/jokes/:id", JokesController.deleteJoke)
}