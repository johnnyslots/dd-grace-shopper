const Sequelize = require('sequelize');
const db = require('../db');

const ActiveOrder = db.define('activeOrder', {
  sessionId: {
    type: Sequelize.STRING
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      min: 0  // or 1?
    }
  }
})


module.exports = ActiveOrder;
