const express = require('express');
const router = express.Router();

// GET all colleges
router.get('/', async (req, res) => {
  // TODO: Implement fetching all colleges
  res.json([]);
});

// GET enrollment numbers by college
router.get('/enrollment', async (req, res) => {
  // TODO: Implement fetching enrollment by college
  res.json([]);
});

// GET average GPA by department
router.get('/department-gpa', async (req, res) => {
  // TODO: Implement fetching average GPA by department
  res.json([]);
});

module.exports = router;
