const FinancingGoal = require('../models/financing_Goals.model')

async function getAllFinancingGoals(req, res) {
    try {
        const financingGoals = await FinancingGoal.findAll()
        if (financingGoals) {
            return res.status(200).json(financingGoals)
        } else {
            return res.status(404).send('No financing goals found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneFinancingGoal(req, res) {
    try {
        const financingGoal = await FinancingGoal.findByPk(req.params.id)
        if (financingGoal) {
            return res.status(200).json(financingGoal)
        } else {
            return res.status(404).send('Financing goal not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createFinancingGoal(req, res) {
    try {
        const financingGoal = await FinancingGoal.create(req.body)
        return res.status(200).json({ message: 'Financing goal created', financingGoal: financingGoal })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateFinancingGoal(req, res) {
    try {
        const [financingGoalExist, financingGoal] = await FinancingGoal.update(req.body, {
            returning: true,
            where: {
                goal_id: req.params.id,
            },
        })
        if (financingGoalExist !== 0) {
            return res.status(200).json({ message: 'Financing goal updated', financingGoal: financingGoal })
        } else {
            return res.status(404).send('Financing goal not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteFinancingGoal(req, res) {
    try {
        const financingGoal = await FinancingGoal.destroy({
            where: {
                goal_id: req.params.id,
            },
        })
        if (financingGoal) {
            return res.status(200).json('Financing goal deleted')
        } else {
            return res.status(404).send('Financing goal not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllFinancingGoals,
    getOneFinancingGoal,
    createFinancingGoal,
    updateFinancingGoal,
    deleteFinancingGoal,
}



