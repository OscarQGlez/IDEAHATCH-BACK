const Reward = require('../models/rewards.model')

async function getAllRewards(req, res) {
    try {
        const rewards = await Reward.findAll()
        if (rewards) {
            return res.status(200).json(rewards)
        } else {
            return res.status(404).send('No rewards found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneReward(req, res) {
    try {
        const reward = await Reward.findByPk(req.params.id)
        if (reward) {
            return res.status(200).json(reward)
        } else {
            return res.status(404).send('Reward not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createReward(req, res) {
    try {
        const reward = await Reward.create(req.body)
        return res.status(200).json({ message: 'Reward created', reward: reward })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateReward(req, res) {
    try {
        const [rewardExist, reward] = await Reward.update(req.body, {
            returning: true,
            where: {
                reward_id: req.params.id,
            },
        })
        if (rewardExist !== 0) {
            return res.status(200).json({ message: 'Reward updated', reward: reward })
        } else {
            return res.status(404).send('Reward not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteReward(req, res) {
    try {
        const reward = await Reward.destroy({
            where: {
                reward_id: req.params.id,
            },
        })
        if (reward) {
            return res.status(200).json('Reward deleted')
        } else {
            return res.status(404).send('Reward not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllRewards,
    getOneReward,
    createReward,
    updateReward,
    deleteReward,
}