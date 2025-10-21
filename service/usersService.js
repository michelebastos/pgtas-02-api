const { findByEmail, createUser, listUsers, users } = require('../model/usersModel');

let nextId = 1;

function register({ name, email, password, favored = false, balance = 0 }) {
  if (!email || !password) {
    const err = new Error('email and password are required');
    err.status = 400;
    throw err;
  }

  if (findByEmail(email)) {
    const err = new Error('user already exists');
    err.status = 409;
    throw err;
  }

  const user = { id: String(nextId++), name, email, password, favored: !!favored, balance: Number(balance) };
  createUser(user);
  const { password: _p, ...rest } = user;
  return rest;
}

function login({ email, password }) {
  if (!email || !password) {
    const err = new Error('email and password are required');
    err.status = 400;
    throw err;
  }

  const user = findByEmail(email);
  if (!user || user.password !== password) {
    const err = new Error('invalid credentials');
    err.status = 401;
    throw err;
  }

  const { password: _p, ...rest } = user;
  return rest;
}

function getAll() {
  return listUsers();
}

function findUserById(id) {
  return users.find(u => u.id === id);
}

module.exports = { register, login, getAll, findUserById };
