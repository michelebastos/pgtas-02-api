const express = require('express');
const router = express.Router();
const usersService = require('../service/usersService');

router.post('/register', (req, res) => {
  try {
    const user = usersService.register(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
});

router.post('/login', (req, res) => {
  try {
    const user = usersService.login(req.body);
    res.json(user);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
});

router.get('/', (req, res) => {
  try {
    const users = usersService.getAll();
    res.json(users);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
});

module.exports = router;
