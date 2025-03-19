// client/src/App.jsx
import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Paper, CircularProgress } from '@material-ui/core';
import { Pie, Bar, Line } from 'react-chartjs-2';
import api from './services/api';
import 'chart.js';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Because api.js has baseURL = 'http://localhost:5000/api'
        // we only need '/colleges/enrollment', etc.
        const [
          collegeRes,
          majorRes,
          gpaRes,
          enrollmentRes,
          gradesRes
        ] = await Promise.all([
          api.get('/colleges/enrollment'),
          api.get('/users/majors'),
          api.get('/colleges/department-gpa'),
          api.get('/classes/course-enrollment'),
          api.get('/classes/course-grades')
        ]);

        setData({
          enrollmentByCollege: collegeRes.data,  // => [{name, count}, ...]
          enrollmentByMajor: majorRes.data,      // => [{major, count}, ...]
          avgGpaByDepartment: gpaRes.data,       // => [{department, avggpa}, ...]
          courseEnrollment: enrollmentRes.data,  // => [{course, count}, ...]
          avgGradeByCourse: gradesRes.data       // => [{course, avggrade}, ...]
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
                labels: data.enrollmentByCollege.map(d => d.name),
                datasets: [{
                  data: data.enrollmentByCollege.map(d => Number(d.count)),
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
                labels: data.enrollmentByMajor.map(d => d.major),
                datasets: [{
                  label: 'Number of Students',
                  data: data.enrollmentByMajor.map(d => Number(d.count)),
                  backgroundColor: '#36A2EB'
                }]
              }}
              options={{
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true
                    }
                  }]
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
                labels: data.avgGpaByDepartment.map(d => d.department),
                datasets: [{
                  label: 'Average GPA',
                  data: data.avgGpaByDepartment.map(d => Number(d.avggpa)),
                  backgroundColor: '#FFCE56'
                }]
              }}
              options={{
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true,
                      max: 4
                    }
                  }]
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
                labels: data.courseEnrollment.map(d => d.course),
                datasets: [{
                  label: 'Number of Students',
                  data: data.courseEnrollment.map(d => Number(d.count)),
                  backgroundColor: '#4BC0C0'
                }]
              }}
              options={{
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true
                    }
                  }]
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
                labels: data.avgGradeByCourse.map(d => d.course),
                datasets: [{
                  label: 'Average Grade',
                  data: data.avgGradeByCourse.map(d => Number(d.avggrade)),
                  borderColor: '#9966FF',
                  tension: 0.1
                }]
              }}
              options={{
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true,
                      max: 5
                    }
                  }]
                }
              }}
              height={100}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
