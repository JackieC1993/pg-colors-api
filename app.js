const express = require('express')
const app = express()
const colorsController = require('./controllers/colorsController')

const cors = require('cors');


//middleware
app.use(cors());
app.use(express.json())
app.use("/colors", colorsController)


app.get('/', (req, res) => {
    res.send('Welcome to Colors App!');
})

module.exports = app;