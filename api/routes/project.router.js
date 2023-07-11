const router = require('express').Router()
const checkAuth = require('../../middlewares/auth.middlewares.js')

const {    
    getAllProjects,
    getOneProject,
    createProject,
    updateProject,
    deleteProject,
    getAllProjectsEager,
    getOneProjectEager, } = require('../controllers/project.controller')

router.get('/',  getAllProjects)
router.get('/:id', getOneProject)
router.post('/', createProject)
router.put('/:id',  updateProject)
router.delete('/:id', deleteProject)
router.get('/getAllProjectsEager',  getAllProjectsEager)
router.get('/getOneProjectEager:id', getOneProjectEager)



module.exports = router