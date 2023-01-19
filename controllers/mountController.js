const Mount = require('../models/mountModel.js')

/**
 * @desc Get all mounts
 * @route GET /api/mounts
 * @access Public
 */
const getMounts = async (req, res) => {
  try {
    const mounts = await Mount.getMounts()
    res.status(200).json(mounts)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  getMounts,
}
