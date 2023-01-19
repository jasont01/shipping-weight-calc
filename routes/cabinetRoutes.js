const express = require('express')
const { getCabinets } = require('../controllers/cabinetController')

//const { verifyAccessToken } = require('../middleware/authMiddleware')

const router = express.Router()

/**
 * @route /api/cabinets
 */
router.get('/', getCabinets)

module.exports = router
