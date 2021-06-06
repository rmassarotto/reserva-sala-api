const controller = {}
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/security')
const { Usuario } = require('../model');

controller.login = async (login, senha) => {
  try {
    const usuario = await Usuario.scope('login').findOne({ where: { login } });
    // const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    if (usuario) {
      if (senha != usuario.senha) return false;

      return jwt.sign({ id: usuario.id }, secret, {
        expiresIn: '24h',
      });
    } else {
      return false
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = controller;