const express = require('express');
const { getAllColors } = require('../queries/color');
const colors = express.Router()

//Get all colors
colors.get("/", async (req, res) => {;
 const allColors = await getAllColors();
 res.json(allColors)
})


module.exports = colors