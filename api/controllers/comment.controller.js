const Comment = require('../models/comments.model')

async function getAllComments(req, res) {
    try {
        const comments = await Comment.findAll()
        if (comments) {
            return res.status(200).json(comments)
        } else {
            return res.status(404).send('No comments found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneComment(req, res) {
    try {
        const comment = await Comment.findByPk(req.params.id)
        if (comment) {
            return res.status(200).json(comment)
        } else {
            return res.status(404).send('Comment not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createComment(req, res) {
    try {
        const comment = await Comment.create(req.body)
        return res.status(200).json({ message: 'Comment created', comment: comment })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateComment(req, res) {
    try {
        const [commentExist, comment] = await Comment.update(req.body, {
            returning: true,
            where: {
                comment_id: req.params.id,
            },
        })
        if (commentExist !== 0) {
            return res.status(200).json({ message: 'Comment updated', comment: comment })
        } else {
            return res.status(404).send('Comment not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteComment(req, res) {
    try {
        const comment = await Comment.destroy({
            where: {
                comment_id: req.params.id,
            },
        })
        if (comment) {
            return res.status(200).json('Comment deleted')
        } else {
            return res.status(404).send('Comment not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllComments,
    getOneComment,
    createComment,
    updateComment,
    deleteComment,
}