const Accessory = require('../models/accessoryModel.js')

/**
 * @desc Get all accessories
 * @route GET /api/accessories
 * @access Public
 */
const getAccessories = async (req, res) => {
  try {
    const accessories = await Accessory.getAccessories()
    res.status(200).json(accessories)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  getAccessories,
}
