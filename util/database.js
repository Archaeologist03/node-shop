const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-shop', 'root', 'bandera123', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
