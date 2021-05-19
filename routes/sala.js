const { Router } = require('express');
const router = Router()
const { Sala } = require('../model');
const controller = require('../controller/default');

router.get('/:id?', async (req, res) => {
  const { id } = req.params;
  const salas = await controller.get(id, Sala)
  res.send(salas || [])
});

router.post('/', async (req, res) => {
  try {
    const { body } = req

    const sala = await controller.save(body, Sala);

    res.send(sala)
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params

    const sala = await controller.edit(id, body, Sala)

    res.send(sala);
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await controller.delete(id, Sala);

    res.send(id)
  } catch (error) {
    res.status(500).send({ error })
  }
});

module.exports = router