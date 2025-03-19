// server/routes/courses.js
const express = require('express');
const db = require('../db/index');

const router = express.Router();

// GET all courses
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM Courses');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
