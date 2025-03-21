import React from 'react';
import { Container, Typography, Paper } from '@material-ui/core';
import { useParams } from 'react-router-dom';

function CourseDetails() {
  const { id } = useParams();
  
  return (
    <Container style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Course Details
      </Typography>
      <Paper style={{ padding: '2rem' }}>
        <Typography variant="h6">
          Course ID: {id}
        </Typography>
        <Typography>
          This page will display detailed information about the course.
        </Typography>
      </Paper>
    </Container>
  );
}

export default CourseDetails;
