const express = require("express");
const { getAllColors, getColor, createColor, deleteColor, updateColor } = require("../queries/color");
const colors = express.Router();
const { checkName, checkBoolean } = require('../validations/checkColors')

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
colors.post('/',checkName,checkBoolean, async (req, res) => {
    const body = req.body
    const color = await createColor(body);
    res.status(200).json(color)
})
colors.delete('/:id', async (req, res) => {
    //Destructure id out of req.params
    const {id} = req.params;
    //Use if as the argument for our deleteColor function call, assign the return value to deleted color.
    const deletedColor = await deleteColor(id);
    //when we get the deletedColor back, it will be an object that represenents the deleted color. 
    // we check if the object has the key of id, and if it does then we have a successful call, and we can send back a successful status 
    if (deletedColor) {
        res.status(200).json(deletedColor)
        } else {
            res.status(404).json({ error: 'Color Not Found' });         
        }
    });
    //PUT (update) a color
    // localhost:4005/colors/:id
colors.put("/:id",checkName, checkBoolean, async (req, res) => {
    //Destructure id out of req.params
    const {id} = req.params;
    const body = req.body
    const updatedColor = await updateColor(id, body);
    res.status(200).json(updatedColor)
})
    

module.exports = colors

