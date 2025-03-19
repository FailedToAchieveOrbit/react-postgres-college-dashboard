const express = require('express');
const router = express.Router();

// GET all classes
router.get('/', async (req, res) => {
  // TODO: Implement fetching all classes
  res.json([]);
});

// GET classes for a specific user
router.get('/user/:userId', async (req, res) => {
  // TODO: Implement fetching classes for a specific user
  res.json([]);
});

// GET number of students per course
router.get('/course-enrollment', async (req, res) => {
  // TODO: Implement fetching number of students per course
  res.json([]);
});

// GET average grade for each course
router.get('/course-grades', async (req, res) => {
  // TODO: Implement fetching average grade for each course
  res.json([]);
});

module.exports = router;
