const express = require('express')
const { getBoxes } = require('../controllers/boxController')

//const { verifyAccessToken } = require('../middleware/authMiddleware')

const router = express.Router()

/**
 * @route /api/boxes
 */
router.get('/', getBoxes)

module.exports = router
