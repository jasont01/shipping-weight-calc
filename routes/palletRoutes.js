const express = require('express')
const { getPallets } = require('../controllers/palletController')

//const { verifyAccessToken } = require('../middleware/authMiddleware')

const router = express.Router()

/**
 * @route /api/pallets
 */
router.get('/', getPallets)

module.exports = router
