const express = require('express')
const { getConfigs } = require('../controllers/configController')

//const { verifyAccessToken } = require('../middleware/authMiddleware')

const router = express.Router()

/**
 * @route /api/configs
 */
router.get('/', getConfigs)

module.exports = router
