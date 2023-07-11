const Category = require('../models/categories.model')

async function getAllCategories(req, res) {
    try {
        const categories = await Category.findAll()
        if (categories) {
            return res.status(200).json(categories)
        } else {
            return res.status(404).send('No categories found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneCategory(req, res) {
    try {
        const category = await Category.findByPk(req.params.id)
        if (category) {
            return res.status(200).json(category)
        } else {
            return res.status(404).send('Category not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createCategory(req, res) {
    try {
        const category = await Category.create(req.body)
        return res.status(200).json({ message: 'Category created', category: category })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateCategory(req, res) {
    try {
        const [categoryExist, category] = await Category.update(req.body, {
            returning: true,
            where: {
                category_id: req.params.id,
            },
        })
        if (categoryExist !== 0) {
            return res.status(200).json({ message: 'Category updated', category: category })
        } else {
            return res.status(404).send('Category not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteCategory(req, res) {
    try {
        const category = await Category.destroy({
            where: {
                category_id: req.params.id,
            },
        })
        if (category) {
            return res.status(200).json('Category deleted')
        } else {
            return res.status(404).send('Category not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllCategories,
    getOneCategory,
    createCategory,
    updateCategory,
    deleteCategory,
}