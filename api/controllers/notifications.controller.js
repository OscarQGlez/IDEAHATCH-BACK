const Notification = require('../models/notifications.model')

async function getAllNotifications(req, res) {
    try {
        const notifications = await Notification.findAll()
        if (notifications) {
            return res.status(200).json(notifications)
        } else {
            return res.status(404).send('No notifications found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneNotification(req, res) {
    try {
        const notification = await Notification.findByPk(req.params.id)
        if (notification) {
            return res.status(200).json(notification)
        } else {
            return res.status(404).send('Notification not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createNotification(req, res) {
    try {
        const notification = await Notification.create(req.body)
        return res.status(200).json({ message: 'Notification created', notification: notification })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateNotification(req, res) {
    try {
        const [notificationExist, notification] = await Notification.update(req.body, {
            returning: true,
            where: {
                notification_id: req.params.id,
            },
        })
        if (notificationExist !== 0) {
            return res.status(200).json({ message: 'Notification updated', notification: notification })
        } else {
            return res.status(404).send('Notification not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteNotification(req, res) {
    try {
        const notification = await Notification.destroy({
            where: {
                notification_id: req.params.id,
            },
        })
        if (notification) {
            return res.status(200).json('Notification deleted')
        } else {
            return res.status(404).send('Notification not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllNotifications,
    getOneNotification,
    createNotification,
    updateNotification,
    deleteNotification,
}
