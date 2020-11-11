const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'password123456', {
  dialect: 'mysql',
  host: 'localhost',
  logging: false,  
});

module.exports = sequelize;
