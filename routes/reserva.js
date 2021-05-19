const { Router } = require('express');
const router = Router()
const { Reserva } = require('../model');
const controller = require('../controller/default');

router.get('/:id?', async (req, res) => {
  const { id } = req.params;
  const reservas = await controller.get(id, Reserva)
  res.send(reservas || [])
});

router.post('/', async (req, res) => {
  try {
    const { body } = req

    const reserva = await controller.save(body, Reserva);

    res.send(reserva)
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params

    const reserva = await controller.edit(id, body, Reserva)

    res.send(reserva);
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await controller.delete(id, Reserva);

    res.send(id)
  } catch (error) {
    res.status(500).send({ error })
  }
});

module.exports = router