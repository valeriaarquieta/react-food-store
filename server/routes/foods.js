const express = require('express');
const router = express.Router();
const { Food } = require('../models');

// Obtener todos los alimentos
router.get('/', async (req, res) => {
  try {
    const foods = await Food.findAll();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los alimentos' });
  }
});

module.exports = router;
