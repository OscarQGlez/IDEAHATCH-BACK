const router = require('express').Router()
const checkAuth = require('../../middlewares/auth.middlewares.js')

const {    
    getAllProjects,
    getOneProject,
    createProject,
    updateProject,
    deleteProject,
    getAllProjectsEager,
    getOneProjectEager,
    createnewproject, } = require('../controllers/project.controller')

router.get('/',  getAllProjects)
router.get('/:id', getOneProject)
router.post('/', createProject)
router.put('/:id',  updateProject)
router.delete('/:id', deleteProject)
    router.get('/eager',  getAllProjectsEager)
    router.post('/newproject',createnewproject)
router.get('/eager:id', getOneProjectEager)



module.exports = router