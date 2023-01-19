const Cabinet = require('../models/cabinetModel.js')

/**
 * @desc Get all cabinets
 * @route GET /api/cabinets
 * @access Public
 */
const getCabinets = async (req, res) => {
  try {
    const cabinets = await Cabinet.getCabinets()
    res.status(200).json(cabinets)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  getCabinets,
}
