const express = require('express')
const { getAccessories } = require('../controllers/accessoryController')

//const { verifyAccessToken } = require('../middleware/authMiddleware')

const router = express.Router()

/**
 * @route /api/accessories
 */
router.get('/', getAccessories)

module.exports = router
