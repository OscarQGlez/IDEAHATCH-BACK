
const Categories = require('../api/models/categories.model')
const Comments = require('../api/models/comments.model')
const Contributions = require('../api/models/contributions.model')
const Financing_Goals = require('../api/models/financing_Goals.model')
const Notifications = require('../api/models/notifications.model')
const Project_Followers = require('../api/models/project_Followers.model')
const Projects = require('../api/models/projects.model')
const Ratings = require('../api/models/ratings.model')
const Rewards = require('../api/models/rewards.model')
const Users = require('../api/models/user.model')

const createRelations = async () => {

    // Projects to Users (one-to-many)
    Projects.belongsTo(Users);
    Users.hasMany(Projects);

    // Financing_Goals to Projects (one-to-many)
    Financing_Goals.belongsTo(Projects);
    Projects.hasMany(Financing_Goals);

    // Contributions to Users (one-to-many)/home/reboot/code/IDEAHATCH/IDEAHATCH-BACK/index.js:35:15
    Contributions.belongsTo(Users);
    Users.hasMany(Contributions);

    // Contributions to Projects (one-to-many)
    Contributions.belongsTo(Projects);
    Projects.hasMany(Contributions);

    // Rewards to Projects (one-to-many)
    Rewards.belongsTo(Projects);
    Projects.hasMany(Rewards);

    // Comments to Users (one-to-many)
    Comments.belongsTo(Users);
    Users.hasMany(Comments);

    // Comments to Projects (one-to-many)
    Comments.belongsTo(Projects);
    Projects.hasMany(Comments);

    // Ratings to Users (one-to-many)
    Ratings.belongsTo(Users);
    Users.hasMany(Ratings);

    // Ratings to Projects (one-to-many)
    Ratings.belongsTo(Projects);
    Projects.hasMany(Ratings);

    // Project_Followers to Users (one-to-many)
    Project_Followers.belongsTo(Users);
    Users.hasMany(Project_Followers);

    // Project_Followers to Projects (one-to-many)
    Project_Followers.belongsTo(Projects)
    Projects.hasMany(Project_Followers);

    // Notifications to Users (one-to-many)
    Notifications.belongsTo(Users)
    Users.hasMany(Notifications)

    // Notifications to Projects (one-to-many)
    Notifications.belongsTo(Projects);
    Projects.hasMany(Notifications); 

/*     // Users to Projects (many-to-many)
    Users.belongsToMany(Projects, { through: 'Notifications' });
    Projects.belongsToMany(Users, { through: 'Notifications' }); */

    // Projects to Categories (many-to-many)
    Projects.belongsToMany(Categories, { through: 'ProjectCategories' });
    Categories.belongsToMany(Projects, { through: 'ProjectCategories' });
}

module.exports = createRelations