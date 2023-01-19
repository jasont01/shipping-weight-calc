const express = require('express')
const { getPanels } = require('../controllers/panelController')

//const { verifyAccessToken } = require('../middleware/authMiddleware')

const router = express.Router()

/**
 * @route /api/panels
 */
router.get('/', getPanels)

module.exports = router
