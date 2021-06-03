const { Op } = require("sequelize");
const { Reserva, Sala, Usuario } = require('../model');

let controller = {};

controller.get = async (id = null) => {
  let result = []

  if (id) {
    result = await Reserva.findOne({
      where: {
        id,
      },
      include: [
        {
          as: 'sala',
          model: Sala,
        },
        {
          as: 'usuario',
          model: Usuario
        }
      ]
    })
  } else {
    result = await Reserva.findAll({
      order: [
        ['id', 'DESC']
      ],
      include: [
        {
          as: 'sala',
          model: Sala,
        },
        {
          as: 'usuario',
          model: Usuario,
          attributes: ['nome']
        }
      ]
    })
  }

  return result
};

controller.getConflitoReserva = async (data, salaId, inicio, fim) => {
  let result = []
  result = await Reserva.findOne({
    where: {
      data,
      salaId,
      [Op.or]: [
        {
          inicio: {
            [Op.between]: [inicio, fim],
          },
        },
        {
          fim: {
            [Op.between]: [inicio, fim]
          }
        }
      ]

    }
  })
  return result ? true : false
}

module.exports = controller;
