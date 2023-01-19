const Box = require('../models/boxModel.js')

/**
 * @desc Get all boxes
 * @route GET /api/boxes
 * @access Public
 */
const getBoxes = async (req, res) => {
  try {
    const boxes = await Box.getBoxes()
    res.status(200).json(boxes)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  getBoxes,
}
