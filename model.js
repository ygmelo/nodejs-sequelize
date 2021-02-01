var Sequelize  = require('sequelize');
var connection = require('./database.js');

var Usuario = connection.define('usuario', {
  nome: Sequelize.STRING,
  idade: Sequelize.INTEGER
}, { freezeTableName: true });

var Administrador = connection.define('administrador', {
  permissao: Sequelize.STRING,
}, { freezeTableName: true });


Administrador.belongsTo(Usuario, { foreignKey: 'id_usuario' }); // ADMINISTRADOR PERTENCE A UM USUÁRIO
Usuario.hasMany(Administrador,   { foreignKey: 'id_usuario' }); // UM USUÁRIO TEM(PODE TER) UM ADMINISTRADOR

module.exports = {Usuario, Administrador};