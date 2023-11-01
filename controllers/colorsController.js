const express = require("express");
const { getAllColors, getColor, createColor } = require("../queries/color");
const colors = express.Router();
const { checkName } = require('../validations/checkColors')

//Get all colors
//localhost:4005/colors/
colors.get("/", async (req, res) => {
  const allColors = await getAllColors();
  if (allColors[0]) {
    res.status(200).json(allColors);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// GET one color
//localhost:4005/colors/:id
colors.get('/:id', async (req, res) => {
    //const id = req.params.id
    const {id} = req.params;
    const oneColor = await getColor(id);
    if (oneColor) {
        res.status(200).json(oneColor);
        } else {
            res.status(404).json({ error: 'Not Found' });     
    }
})

//POST a new color
//localhost:4005/colors/
colors.post('/', async (req, res) => {
    const body = req.body
    const color = await createColor(body);
    res.status(200).json(color)
})

module.exports = colors
