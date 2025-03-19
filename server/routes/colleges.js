// server/routes/colleges.js
const express = require('express');
const db = require('../db/index');

const router = express.Router();

// GET all colleges
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM Colleges');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

// GET enrollment numbers for each college
router.get('/enrollment', async (req, res) => {
  try {
    const result = await db.query(`
      SELECT c.name, COUNT(cl.id) AS count
      FROM Colleges c
      LEFT JOIN Classes cl ON c.id = cl.college_id
      GROUP BY c.name
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

// GET average GPA by department
router.get('/department-gpa', async (req, res) => {
  try {
    const result = await db.query(`
      SELECT co.department, ROUND(AVG(g.grade)::numeric, 2) AS avggpa
      FROM Colleges co
      LEFT JOIN Classes cl ON co.id = cl.college_id
      LEFT JOIN Grades g ON cl.id = g.class_id
      GROUP BY co.department
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
