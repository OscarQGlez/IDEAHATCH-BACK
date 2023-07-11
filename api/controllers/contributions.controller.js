const Contribution = require('../models/contributions.model')

async function getAllContributions(req, res) {
    try {
        const contributions = await Contribution.findAll()
        if (contributions) {
            return res.status(200).json(contributions)
        } else {
            return res.status(404).send('No contributions found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneContribution(req, res) {
    try {
        const contribution = await Contribution.findByPk(req.params.id)
        if (contribution) {
            return res.status(200).json(contribution)
        } else {
            return res.status(404).send('Contribution not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createContribution(req, res) {
    try {
        const contribution = await Contribution.create(req.body)
        return res.status(200).json({ message: 'Contribution created', contribution: contribution })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateContribution(req, res) {
    try {
        const [contributionExist, contribution] = await Contribution.update(req.body, {
            returning: true,
            where: {
                contribution_id: req.params.id,
            },
        })
        if (contributionExist !== 0) {
            return res.status(200).json({ message: 'Contribution updated', contribution: contribution })
        } else {
            return res.status(404).send('Contribution not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteContribution(req, res) {
    try {
        const contribution = await Contribution.destroy({
            where: {
                contribution_id: req.params.id,
            },
        })
        if (contribution) {
            return res.status(200).json('Contribution deleted')
        } else {
            return res.status(404).send('Contribution not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllContributions,
    getOneContribution,
    createContribution,
    updateContribution,
    deleteContribution,
}
