const express = require('express')
const { msg, allmsg, singleRoom } = require('../controller/Message')
const { userMsg, allMsg } = require('../controller/msgConroller')

const router = express.Router()
router.route('/group/create').post(msg)
router.route('/message/new').post(userMsg)
router.route('/all/rooms').get(allmsg)
router.route('/room/:id').get(singleRoom)
router.route('/message/:id').get(allMsg)

module.exports = router