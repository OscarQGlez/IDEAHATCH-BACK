const router = require('express').Router()
const checkAuth = require('../../middlewares/auth.middlewares.js')

const { 
    getAllFinancingGoals,
    getOneFinancingGoal,
    createFinancingGoal,
    updateFinancingGoal,
    deleteFinancingGoal, } = require('../controllers/financingGoals.controller.js')

router.get('/',  getAllFinancingGoals)
router.get('/:id', getOneFinancingGoal)
router.post('/', createFinancingGoal)
router.put('/:id',  updateFinancingGoal)
router.delete('/:id', deleteFinancingGoal)



module.exports = router