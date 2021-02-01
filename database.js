var Sequelize = require('sequelize');

var connection = new Sequelize('teste', 'postgres', '123', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false
  }
});

module.exports = connection;