const router = require('express').Router()
const checkAuth = require('../../middlewares/auth.middlewares.js')

const { 
    getAllComments,
    getOneComment,
    createComment,
    updateComment,
    deleteComment, } = require('../controllers/comment.controller.js')

router.get('/',  getAllComments)
router.get('/:id', getOneComment)
router.post('/', createComment)
router.put('/:id',  updateComment)
router.delete('/:id', deleteComment)



module.exports = router