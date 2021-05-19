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

  Reserva.associate = function (models) {
    this.belongsTo(models.Usuario, {
      as: 'usuario',
      foreignKey: 'usuarioId'
    }),
      this.belongsTo(models.Sala, {
        as: 'sala',
        foreignKey: 'salaId'
      })
  }

  return Reserva
}