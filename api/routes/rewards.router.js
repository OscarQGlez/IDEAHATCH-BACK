const router = require('express').Router()
const checkAuth = require('../../middlewares/auth.middlewares.js')

const { 
    getAllRewards,
    getOneReward,
    createReward,
    updateReward,
    deleteReward, } = require('../controllers/rewards.controller.js')

router.get('/',  getAllRewards)
router.get('/:id', getOneReward)
router.post('/', createReward)
router.put('/:id',  updateReward)
router.delete('/:id', deleteReward)



module.exports = router