module.exports = function (sequelize, DataTypes) {
  const Usuario = sequelize.define('usuario',
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
      },
      login: {
        type: DataTypes.STRING,
        allowNull: false
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'res_usuario',
      timestamps: false //createdAt
    }
  );

  Usuario.associate = function (models) {
    this.hasMany(models.Reserva, {
      as: 'reserva',
      foreignKey: 'usuarioId'
    })
  }

  return Usuario
}