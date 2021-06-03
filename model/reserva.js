module.exports = function (sequelize, DataTypes) {
  const Reserva = sequelize.define('reserva',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      salaId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      data: {
        type: DataTypes.DATE,
        allowNull: false
      },
      inicio: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fim: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'res_reserva',
      timestamps: false //createdAt
    }
  );

  return Reserva
}