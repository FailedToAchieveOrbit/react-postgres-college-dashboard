const express = require('express');
const router = express.Router();

// GET all courses
router.get('/', async (req, res) => {
  // TODO: Implement fetching all courses
  res.json([]);
});

module.exports = router;
