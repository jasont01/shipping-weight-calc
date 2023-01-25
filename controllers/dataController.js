const Panel = require('../models/panelModel.js')
const Cabinet = require('../models/cabinetModel.js')
const Config = require('../models/configModel.js')
const Mount = require('../models/mountModel.js')
const Accessory = require('../models/accessoryModel.js')
const Pallet = require('../models/palletModel.js')
const Box = require('../models/boxModel.js')

/**
 * @desc Get all data
 * @route GET /api/data
 * @access Public
 */
const getData = async (req, res) => {
  try {
    const panels = await Panel.getPanels()
    const cabinets = await Cabinet.getCabinets()
    const mount = await Mount.getMounts()
    const config = await Config.getConfigs()
    const accessories = await Accessory.getAccessories()
    const pallets = await Pallet.getPallets()
    const boxes = await Box.getBoxes()

    res
      .status(200)
      .json({ panels, cabinets, config, mount, accessories, pallets, boxes })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  getData,
}
