const Sequelize = require('sequelize')
const db = require('../db')

const Trips = db.define('trips', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: {
                $gt: 0
            }
        }
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            len: {
                $gt: 0
            }
        }
    },
    status: {
        type: Sequelize.ENUM('active', 'canceled', 'complete')
    }
});

module.exports = Trips;
