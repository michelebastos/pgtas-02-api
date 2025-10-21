const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const usersRouter = require('./controller/usersController');
const transfersRouter = require('./controller/transfersController');

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/users', usersRouter);
app.use('/transfers', transfersRouter);

app.get('/', (req, res) => {
  res.json({ message: 'PGATS-02 API - in-memory' });
});

module.exports = app;
