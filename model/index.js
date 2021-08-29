const { Sequelize, DataTypes } = require('sequelize');
const _Reserva = require('./reserva')
const _Sala = require('./sala')
const _Usuario = require('./usuario')

let database = {};

//CONFIGURACOES DE BANCO
const options = {
  username: '',
  password: '',
  host: '',
  dialect: 'postgres'
};

const sequelize = new Sequelize(options);

sequelize.authenticate()
  .then(() => console.log(`CONNECTION SUCCESS: ${options.username}`))
  .catch((error) => console.log(`CONNECTION ERROR: ${error}`))

let Reserva = _Reserva(sequelize, DataTypes);
let Sala = _Sala(sequelize, DataTypes);
let Usuario = _Usuario(sequelize, DataTypes);

Reserva.belongsTo(Usuario, { as: 'usuario', foreignKey: 'usuarioId' });
Reserva.belongsTo(Sala, { as: 'sala', foreignKey: 'salaId' });
Sala.hasMany(Reserva, { as: 'reserva', foreignKey: 'salaId' });
Usuario.hasMany(Reserva, { as: 'reserva', foreignKey: 'usuarioId' });

database = {
  Reserva,
  Sala,
  Usuario
};

database.sequelize = sequelize

module.exports = database
