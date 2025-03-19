// server/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const collegesRoutes = require('./routes/colleges');
const usersRoutes = require('./routes/users');
const coursesRoutes = require('./routes/courses');
const classesRoutes = require('./routes/classes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: err.message });
});

// Routes with error handling
app.use('/api/colleges', (req, res, next) => {
  console.log('Colleges route accessed');
  collegesRoutes(req, res, next);
});
app.use('/api/users', (req, res, next) => {
  console.log('Users route accessed');
  usersRoutes(req, res, next);
});
app.use('/api/courses', (req, res, next) => {
  console.log('Courses route accessed');
  coursesRoutes(req, res, next);
});
app.use('/api/classes', (req, res, next) => {
  console.log('Classes route accessed');
  classesRoutes(req, res, next);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Database URL:', process.env.POSTGRES);
});
