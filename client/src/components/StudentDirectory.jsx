import React from 'react';
import { Container, Typography, Paper } from '@material-ui/core';

function StudentDirectory() {
  return (
    <Container style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Student Directory
      </Typography>
      <Paper style={{ padding: '2rem' }}>
        <Typography>
          This page will display the student directory.
        </Typography>
      </Paper>
    </Container>
  );
}

export default StudentDirectory;
