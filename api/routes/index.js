const router = require('express').Router()
const auth = require('./auth.router.js')
const userRouter = require('./user.router')
const projectRouter = require('./project.router')
const categoriesRouter = require('./categories.router')
const contributionsRouter = require('./contributions.router.js')
const rewardsRouter  = require('./rewards.router.js')
const financingGoalsRouter = require('./financingGoals.router.js')
const commentsRouter = require('./comments.router.js')
const notificationsRouter = require('./notifications.router.js')
const projectFollowersRouter = require('./projectFollowers.router.js')
const ratingsRouter = require('./ratings.router.js')

router.use('/auth', auth)
router.use('/user', userRouter)
router.use('/project', projectRouter)
router.use('/categories', categoriesRouter)
router.use('/contributions', contributionsRouter)
router.use('/rewards', rewardsRouter)
router.use('/financingGoals', financingGoalsRouter)
router.use('/comments', commentsRouter)
router.use('/notifications', notificationsRouter)
router.use('/projectFollowers', projectFollowersRouter)
router.use('/ratings', ratingsRouter)



module.exports = router 