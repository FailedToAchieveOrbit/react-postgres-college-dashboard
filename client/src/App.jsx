import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Paper, CircularProgress } from '@material-ui/core';
import { Pie, Bar, Line } from 'react-chartjs-2';
import api from './services/api';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // TODO: Implement data fetching logic
        setData({
          enrollmentByCollege: [],  // Example: [{name: 'College A', count: 100}]
          enrollmentByMajor: [],    // Example: [{major: 'Major A', count: 50}]
          avgGpaByDepartment: [],   // Example: [{department: 'Dept A', avggpa: 3.5}]
          courseEnrollment: [],     // Example: [{course: 'Course A', count: 30}]
          avgGradeByCourse: []      // Example: [{course: 'Course A', avggrade: 85}]
        });
      } catch (err) {
        setError('Failed to fetch dashboard data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!data) return null;

  return (
    <Container style={{ marginTop: '2rem' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        College Dashboard
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Welcome to the College Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* 1. Students per College (Pie) */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '1rem' }}>
            <Typography variant="h6">Students per College</Typography>
            <Pie
              data={{
                labels: [], // TODO: Implement data labels
                datasets: [{
                  data: [], // TODO: Implement data values
                  backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'
                  ]
                }]
              }}
              height={300}
            />
          </Paper>
        </Grid>

        {/* 2. Students per Major (Bar) */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '1rem' }}>
            <Typography variant="h6">Students per Major</Typography>
            <Bar
              data={{
                labels: [], // TODO: Implement data labels
                datasets: [{
                  label: 'Number of Students',
                  data: [], // TODO: Implement data values
                  backgroundColor: '#36A2EB'
                }]
              }}
              options={{
                scales: {
                  y: { beginAtZero: true }
                }
              }}
              height={300}
            />
          </Paper>
        </Grid>

        {/* 3. Average GPA by Department (Bar) */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '1rem' }}>
            <Typography variant="h6">Average GPA by Department</Typography>
            <Bar
              data={{
                labels: [], // TODO: Implement data labels
                datasets: [{
                  label: 'Average GPA',
                  data: [], // TODO: Implement data values
                  backgroundColor: '#FFCE56'
                }]
              }}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 4
                  }
                }
              }}
              height={300}
            />
          </Paper>
        </Grid>

        {/* 4. Course Enrollment (Bar) */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '1rem' }}>
            <Typography variant="h6">Course Enrollment</Typography>
            <Bar
              data={{
                labels: [], // TODO: Implement data labels
                datasets: [{
                  label: 'Number of Students',
                  data: [], // TODO: Implement data values
                  backgroundColor: '#4BC0C0'
                }]
              }}
              options={{
                scales: {
                  y: { beginAtZero: true }
                }
              }}
              height={300}
            />
          </Paper>
        </Grid>

        {/* 5. Average Grade by Course (Line) */}
        <Grid item xs={12}>
          <Paper style={{ padding: '1rem' }}>
            <Typography variant="h6">Average Grade by Course</Typography>
            <Line
              data={{
                labels: [], // TODO: Implement data labels
                datasets: [{
                  label: 'Average Grade',
                  data: [], // TODO: Implement data values
                  borderColor: '#9966FF',
                  tension: 0.1
                }]
              }}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100
                  }
                }
              }}
              height={300}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
