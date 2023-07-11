const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Rewards = sequelize.define('Rewards', 
    {
        project_id: {type: DataTypes.INTEGER,},
        title: {type: DataTypes.STRING,},
        description: {type: DataTypes.TEXT,},
        amount: {type: DataTypes.DECIMAL,},
        time_limit: {type: DataTypes.STRING},
    },
        { timestamps: false }
);

module.exports = Rewards
