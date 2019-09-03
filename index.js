let express = require('express')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let app = express()
let ApiRoutes = require("./api-routes")

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())


mongoose.connect('mongodb://localhost/resthub')
const db = mongoose.connection

const port = process.env.PORT || 8181
app.get('/', (req, res) => res.send(hello))

app.listen(port, function () {
    console.log("running resthub on port" + port)
})