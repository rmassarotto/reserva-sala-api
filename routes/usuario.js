const { Router } = require('express');
const router = Router()
const { Usuario } = require('../model');
const controller = require('../controller/default');

router.get('/:id?', async (req, res) => {
  const { id } = req.params;
  const usuarios = await controller.get(id, Usuario)
  res.send(usuarios || [])
});

router.post('/', async (req, res) => {
  try {
    const { body } = req

    const usuario = await controller.save(body, Usuario);

    res.send(usuario)
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params

    const usuario = await controller.edit(id, body, Usuario)

    res.send(usuario);
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await controller.delete(id, Usuario);

    res.send(id)
  } catch (error) {
    res.status(500).send({ error })
  }
});

module.exports = router