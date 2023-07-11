const router = require('express').Router()
const checkAuth = require('../../middlewares/auth.middlewares.js')

const { 
    getAllCategories,
    getOneCategory,
    createCategory,
    updateCategory,
    deleteCategory, } = require('../controllers/categories.controller.js')

router.get('/',  getAllCategories)
router.get('/:id', getOneCategory)
router.post('/', createCategory)
router.put('/:id',  updateCategory)
router.delete('/:id', deleteCategory)



module.exports = router