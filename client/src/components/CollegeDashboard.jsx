import React from 'react';
import { Container, Typography, Grid, Paper, CircularProgress, Box } from '@material-ui/core';
import { Pie, Bar, Line } from 'react-chartjs-2';
import { useDashboardData } from '../hooks/useDashboardData';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Chart container style
const chartContainerStyle = {
  position: 'relative',
  height: '300px',
  width: '100%'
};

function CollegeDashboard() {
  const { data, loading, error } = useDashboardData();

  if (loading) return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <CircularProgress />
    </Box>
  );
  
  if (error) return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Typography color="error">{error}</Typography>
    </Box>
  );
  
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
            <div style={chartContainerStyle}>
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
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                    }
                  }
                }}
              />
            </div>
          </Paper>
        </Grid>

        {/* 2. Students per Major (Bar) */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '1rem' }}>
            <Typography variant="h6">Students per Major</Typography>
            <div style={chartContainerStyle}>
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
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                }}
              />
            </div>
          </Paper>
        </Grid>

        {/* 3. Average GPA by Department (Bar) */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '1rem' }}>
            <Typography variant="h6">Average GPA by Department</Typography>
            <div style={chartContainerStyle}>
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
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 4
                    }
                  }
                }}
              />
            </div>
          </Paper>
        </Grid>

        {/* 4. Course Enrollment (Bar) */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '1rem' }}>
            <Typography variant="h6">Course Enrollment</Typography>
            <div style={chartContainerStyle}>
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
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                }}
              />
            </div>
          </Paper>
        </Grid>

        {/* 5. Average Grade by Course (Line) */}
        <Grid item xs={12}>
          <Paper style={{ padding: '1rem' }}>
            <Typography variant="h6">Average Grade by Course</Typography>
            <div style={{...chartContainerStyle, height: '200px'}}>
              <Line
                data={{
                  labels: data.avgGradeByCourse.map(d => d.course),
                  datasets: [{
                    label: 'Average Grade',
                    data: data.avgGradeByCourse.map(d => Number(d.avggrade)),
                    borderColor: '#9966FF',
                    fill: false,
                    tension: 0.1
                  }]
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 5
                    }
                  }
                }}
              />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CollegeDashboard;
