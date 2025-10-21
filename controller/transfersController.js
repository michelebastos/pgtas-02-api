const express = require('express');
const router = express.Router();
const transfersService = require('../service/transfersService');

router.post('/', (req, res) => {
  try {
    const t = transfersService.transfer(req.body);
    res.status(201).json(t);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
});

router.get('/', (req, res) => {
  try {
    const all = transfersService.getAll();
    res.json(all);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
});

module.exports = router;
