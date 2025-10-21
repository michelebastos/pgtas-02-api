// armazenamento em memória
const users = [];

function findByEmail(email) {
  return users.find(u => u.email === email);
}

function findById(id) {
  return users.find(u => u.id === id);
}

function createUser(user) {
  users.push(user);
  return user;
}

function listUsers() {
  // não retornar senha
  return users.map(({ password, ...rest }) => rest);
}

module.exports = {
  users,
  findByEmail,
  findById,
  createUser,
  listUsers
};
