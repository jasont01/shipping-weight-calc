const express = require('express')

const router = express.Router()

//router.use('/auth', require('./routes/authRoutes'))
//router.use('/users', require('./routes/userRoutes'))

//router.use('/data', require('./routes/dataRoutes'))

router.use('/panels', require('./panelRoutes'))
router.use('/cabinets', require('./cabinetRoutes'))
router.use('/mounts', require('./mountRoutes'))
router.use('/configs', require('./configRoutes'))
router.use('/accessories', require('./accessoryRoutes'))
router.use('/pallets', require('./palletRoutes'))
router.use('/boxes', require('./boxRoutes'))

module.exports = router
