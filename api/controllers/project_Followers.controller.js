const ProjectFollower = require('../models/project_Followers.model')

async function getAllProjectFollowers(req, res) {
    try {
        const projectFollowers = await ProjectFollower.findAll()
        if (projectFollowers) {
            return res.status(200).json(projectFollowers)
        } else {
            return res.status(404).send('No project followers found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneProjectFollower(req, res) {
    try {
        const projectFollower = await ProjectFollower.findByPk(req.params.id)
        if (projectFollower) {
            return res.status(200).json(projectFollower)
        } else {
            return res.status(404).send('Project follower not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createProjectFollower(req, res) {
    try {
        const projectFollower = await ProjectFollower.create(req.body)
        return res.status(200).json({ message: 'Project follower created', projectFollower: projectFollower })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateProjectFollower(req, res) {
    try {
        const [projectFollowerExist, projectFollower] = await ProjectFollower.update(req.body, {
            returning: true,
            where: {
                follow_id: req.params.id,
            },
        })
        if (projectFollowerExist !== 0) {
            return res.status(200).json({ message: 'Project follower updated', projectFollower: projectFollower })
        } else {
            return res.status(404).send('Project follower not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteProjectFollower(req, res) {
    try {
        const projectFollower = await ProjectFollower.destroy({
            where: {
                follow_id: req.params.id,
            },
        })
        if (projectFollower) {
            return res.status(200).json('Project follower deleted')
        } else {
            return res.status(404).send('Project follower not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllProjectFollowers,
    getOneProjectFollower,
    createProjectFollower,
    updateProjectFollower,
    deleteProjectFollower,
}