module.exports = function (sequelize, DataTypes) {
  const Sala = sequelize.define('sala',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'res_sala',
      timestamps: false //createdAt
    }
  );

  return Sala
}