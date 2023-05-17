const express = require("express");
const app = express();

const port = 8000;

app.use(express.json(), express.urlencoded({extended:true}))

require("./configs/mongoose.config")
const jokesRoutes = require('./routes/jokes.routes')
jokesRoutes(app)

app.listen( port, () => console.log(`Listening on port: ${port}`))