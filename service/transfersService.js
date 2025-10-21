const { findById } = require('./usersService');
const usersModel = require('../model/usersModel');
const { createTransfer, listTransfers } = require('../model/transfersModel');

function transfer({ fromId, toId, amount }) {
  amount = Number(amount);
  if (!fromId || !toId || !amount || amount <= 0) {
    const err = new Error('fromId, toId and amount (>0) are required');
    err.status = 400;
    throw err;
  }

  const from = usersModel.findById(fromId);
  const to = usersModel.findById(toId);

  if (!from) {
    const err = new Error('origin user not found');
    err.status = 404;
    throw err;
  }
  if (!to) {
    const err = new Error('destination user not found');
    err.status = 404;
    throw err;
  }

  // regra: transferências para destinatários que não são favorecidos só podem ser realizadas se o valor < 5000
  if (!to.favored && amount >= 5000) {
    const err = new Error('transfer to non-favored recipients must be less than 5000');
    err.status = 403;
    throw err;
  }

  if (from.balance < amount) {
    const err = new Error('insufficient funds');
    err.status = 400;
    throw err;
  }

  from.balance -= amount;
  to.balance += amount;

  const t = { id: String(Date.now()), fromId, toId, amount, date: new Date().toISOString() };
  createTransfer(t);
  return t;
}

function getAll() {
  return listTransfers();
}

module.exports = { transfer, getAll };
