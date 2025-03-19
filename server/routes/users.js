// server/routes/users.js
const express = require('express');
const db = require('../db/index');

const router = express.Router();

// GET all users
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM Users');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

// GET enrollment numbers by major
router.get('/majors', async (req, res) => {
  try {
    const result = await db.query(`
      SELECT major, COUNT(*) AS count
      FROM Users
      GROUP BY major
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
