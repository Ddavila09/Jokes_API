const mongoose = require("mongoose")

const dbname = "jokesclouddb"
const username = "ddavilax23"
const password = "pkaX5xqq1EHksyLK"

const uri = `mongodb+srv://${username}:${password}@cluster0.lt38pvm.mongodb.net/${dbname}`;
;


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("Mango is connected"))
    .catch((err)=> console.log("This is our config error message!", err))