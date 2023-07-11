const router = require('express').Router()
const checkAuth = require('../../middlewares/auth.middlewares.js')

const { 
    getAllNotifications,
    getOneNotification,
    createNotification,
    updateNotification,
    deleteNotification, } = require('../controllers/notifications.controller.js')

router.get('/',  getAllNotifications)
router.get('/:id', getOneNotification)
router.post('/', createNotification)
router.put('/:id',  updateNotification)
router.delete('/:id', deleteNotification)



module.exports = router