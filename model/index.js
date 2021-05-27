const { Sequelize, DataTypes } = require('sequelize');
const _Reserva = require('./reserva')
const _Sala = require('./sala')
const _Usuario = require('./usuario')

const database = {};

//CONFIGURACOES DE BANCO
const options = {
  username: 'postgres',
  password: '',
  host: 'localhost',
  dialect: 'postgres'
};

const sequelize = new Sequelize(options);

sequelize.authenticate()
  .then(() => console.log(`CONNECTION SUCCESS: ${options.username}`))
  .catch((error) => console.log(`CONNECTION ERROR: ${error}`))

let Reserva = _Reserva(sequelize, DataTypes);
let Sala = _Sala(sequelize, DataTypes);
let Usuario = _Usuario(sequelize, DataTypes);

database['Reserva'] = Reserva;
database['Sala'] = Sala;
database['Usuario'] = Usuario;

database.sequelize = sequelize

module.exports = database