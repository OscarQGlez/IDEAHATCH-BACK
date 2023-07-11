const router = require('express').Router()
const checkAuth = require('../../middlewares/auth.middlewares.js')

const { 
    getAllProjectFollowers,
    getOneProjectFollower,
    createProjectFollower,
    updateProjectFollower,
    deleteProjectFollower, } = require('../controllers/project_Followers.controller.js')

router.get('/',  getAllProjectFollowers)
router.get('/:id', getOneProjectFollower)
router.post('/', createProjectFollower)
router.put('/:id',  updateProjectFollower)
router.delete('/:id', deleteProjectFollower)



module.exports = router