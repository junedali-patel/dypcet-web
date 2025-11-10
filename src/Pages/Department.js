import React from 'react';
import { Container, Typography, Grid, Paper, List, ListItem, ListItemText, Box, Divider } from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';

const departments = [
  {
    name: 'Computer Science & Engineering',
    year: 1984,
    intake: 240,
    accreditation: ['NBA', 'NAAC Accredited A'],
    highlights: [
      'First department established in Western Maharashtra',
      'State-of-the-art laboratories and infrastructure',
      'Focus on AI, ML, Data Science, and Blockchain',
      'Industry collaborations with top tech companies',
      'Alumni in leading organizations like Google, Microsoft, and TCS',
    ],
  },
  {
    name: 'Electronics & Telecommunication Engineering',
    year: 1984,
    intake: 120,
    accreditation: ['NBA', 'NAAC Accredited A'],
    highlights: [
      'Specialized labs in IoT, VLSI, and Embedded Systems',
      'Emphasis on research and development',
      'Strong industry connections for internships',
      'Active student clubs and workshops',
    ],
  },
  {
    name: 'Mechanical Engineering',
    year: 1984,
    intake: 120,
    accreditation: ['NBA', 'NAAC Accredited A'],
    highlights: [
      'Advanced manufacturing and CAD labs',
      'Participation in national and international competitions',
      'Collaborations with industries for live projects',
      'Focus on sustainable engineering practices',
    ],
  },
  {
    name: 'Civil Engineering',
    year: 1985,
    intake: 120,
    accreditation: ['NBA', 'NAAC Accredited A'],
    highlights: [
      'State-of-the-art surveying and material testing labs',
      'Research in structural engineering and environmental sustainability',
      'Strong alumni network in government and private sectors',
      'Active participation in community development projects',
    ],
  },
];

function Departments() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#103D74' }}>
        Departments
      </Typography>
      <Grid container spacing={4}>
        {departments.map((dept, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#103D74' }}>
                {dept.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                <strong>Year of Establishment:</strong> {dept.year}
                <br />
                <strong>Intake:</strong> {dept.intake}
                <br />
                <strong>Accreditation:</strong> {dept.accreditation.join(', ')}
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#103D74' }}>
                Key Highlights
              </Typography>
              <List>
                {dept.highlights.map((highlight, idx) => (
                  <ListItem key={idx} sx={{ display: 'list-item' }}>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <CheckCircleIcon sx={{ color: '#103D74', mr: 1 }} />
                          <Typography variant="body2">{highlight}</Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Departments;
