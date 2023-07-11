const router = require('express').Router()
const checkAuth = require('../../middlewares/auth.middlewares.js')

const { 
    getAllContributions,
    getOneContribution,
    createContribution,
    updateContribution,
    deleteContribution, } = require('../controllers/contributions.controller.js')

router.get('/',  getAllContributions)
router.get('/:id', getOneContribution)
router.post('/', createContribution)
router.put('/:id',  updateContribution)
router.delete('/:id', deleteContribution)



module.exports = router