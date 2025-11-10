import React from 'react';
import {
  Container,
  Typography,
  Box,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
} from '@mui/material';

const courseData = {
  'B.Tech': [
    { name: 'Chemical Engineering', intake: 60 },
    { name: 'Civil Engineering', intake: 120 },
    { name: 'Computer Science and Engineering', intake: 360 },
    { name: 'Computer Science and Engineering (Artificial Intelligence and Machine Learning)', intake: 180 },
    { name: 'Computer Science and Engineering (Data Science)', intake: 180 },
    { name: 'Electronics and Telecommunication Engineering', intake: 120 },
    { name: 'Mechanical Engineering', intake: 120 },
  ],
  'M.Tech': [
    { name: 'Computer Science and Engineering', intake: 18 },
    { name: 'Electronics and Telecommunication Engineering', intake: 18 },
  ],
  Architecture: [
    { name: 'Bachelor of Architecture', intake: 80 },
  ],
};

function Admissions() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Admissions
      </Typography>
      <Typography variant="body1" paragraph>
        Apply now to join our diverse and vibrant student community.
      </Typography>

      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={selectedTab} onChange={handleTabChange} aria-label="Admissions Tabs">
          {Object.keys(courseData).map((courseType, index) => (
            <Tab key={courseType} label={courseType} id={`tab-${index}`} aria-controls={`tabpanel-${index}`} />
          ))}
        </Tabs>

        {Object.keys(courseData).map((courseType, index) => (
          <Box
            key={courseType}
            role="tabpanel"
            hidden={selectedTab !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            sx={{ mt: 3 }}
          >
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Course Name</strong></TableCell>
                    <TableCell align="right"><strong>Sanctioned Intake</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {courseData[courseType].map((course, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{course.name}</TableCell>
                      <TableCell align="right">{course.intake}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        ))}
      </Box>

      <Typography variant="h6" sx={{ mt: 5 }}>
        Contact for Admissions
      </Typography>
      <Typography variant="body1">
        For more information, please reach out to the admissions team at{' '}
        <Link href="mailto:admission.dypcet@dypgroup.edu.in">
          admission.dypcet@dypgroup.edu.in
        </Link>
        .
      </Typography>
    </Container>
  );
}

export default Admissions;
