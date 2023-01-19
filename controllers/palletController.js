const Pallet = require('../models/palletModel.js')

/**
 * @desc Get all pallets
 * @route GET /api/pallets
 * @access Public
 */
const getPallets = async (req, res) => {
  try {
    const pallets = await Pallet.getPallets()
    res.status(200).json(pallets)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  getPallets,
}
