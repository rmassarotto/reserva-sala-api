const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const port = 3005;

const reserva = require('./routes/reserva');
const sala = require('./routes/sala');
const usuario = require('./routes/usuario');
const login = require('./routes/login');

app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
);
app.use(bodyParser.json());

app.use('/login', login)
app.use('/reserva', reserva)
app.use('/sala', sala)
app.use('/usuario', usuario)

app.listen(port, () => {
  console.log(`Running in http://localhost:${port}`);
})