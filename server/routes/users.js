const express = require('express');
const router = express.Router();

// GET all users
router.get('/', async (req, res) => {
  // TODO: Implement fetching all users
  res.json([]);
});

// GET enrollment numbers by major
router.get('/majors', async (req, res) => {
  // TODO: Implement fetching enrollment by major
  res.json([]);
});

module.exports = router;
