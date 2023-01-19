const Config = require('../models/configModel.js')

/**
 * @desc Get all configs
 * @route GET /api/configs
 * @access Public
 */
const getConfigs = async (req, res) => {
  try {
    const configs = await Config.getConfigs()
    res.status(200).json(configs)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  getConfigs,
}
