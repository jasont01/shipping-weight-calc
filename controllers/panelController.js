const Panel = require('../models/panelModel.js')

/**
 * @desc Get all panels
 * @route GET /api/panels
 * @access Public
 */
const getPanels = async (req, res) => {
  try {
    const panels = await Panel.getPanels()
    res.status(200).json(panels)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  getPanels,
}
