const express = require('express')
const { getMounts } = require('../controllers/mountController')

//const { verifyAccessToken } = require('../middleware/authMiddleware')

const router = express.Router()

/**
 * @route /api/mounts
 */
router.get('/', getMounts)

module.exports = router
