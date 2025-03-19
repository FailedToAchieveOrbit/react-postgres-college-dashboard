// server/routes/classes.js
const express = require('express');
const db = require('../db/index');

const router = express.Router();

// GET all classes with details
router.get('/', async (req, res) => {
  try {
    const result = await db.query(`
      SELECT cl.*, u.name AS user_name, c.title AS course_title, col.name AS college_name
      FROM Classes cl
      LEFT JOIN Users u ON cl.user_id = u.id
      LEFT JOIN Courses c ON cl.course_id = c.id
      LEFT JOIN Colleges col ON cl.college_id = col.id
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

// GET classes for a specific user
router.get('/user/:userId', async (req, res) => {
  try {
    const result = await db.query(`
      SELECT cl.*, c.title AS course_title
      FROM Classes cl
      LEFT JOIN Courses c ON cl.course_id = c.id
      WHERE cl.user_id = $1
    `, [req.params.userId]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

// GET number of students per course
router.get('/course-enrollment', async (req, res) => {
  try {
    const result = await db.query(`
      SELECT c.title AS course, COUNT(cl.id) AS count
      FROM Courses c
      LEFT JOIN Classes cl ON c.id = cl.course_id
      GROUP BY c.title
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

// GET average grade for each course
router.get('/course-grades', async (req, res) => {
  try {
    const result = await db.query(`
      SELECT c.title AS course, ROUND(AVG(g.grade)::numeric, 2) AS avggrade
      FROM Courses c
      LEFT JOIN Classes cl ON c.id = cl.course_id
      LEFT JOIN Grades g ON cl.id = g.class_id
      GROUP BY c.title
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
