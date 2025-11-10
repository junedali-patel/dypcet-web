import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme
} from '@mui/material';
import { 
  School as SchoolIcon,
  MenuBook as MenuBookIcon,
  People as PeopleIcon,
  CheckCircle as CheckCircleIcon,
  ExpandMore as ExpandMoreIcon,
  CalendarToday as CalendarIcon,
  LibraryBooks as LibraryIcon,
  Assessment as AssessmentIcon,
  Computer as ComputerIcon,
  Engineering as EngineeringIcon,
  Science as ScienceIcon,
  Apartment as ApartmentIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import '../styles/Academics.css';

const programs = [
  {
    title: 'Undergraduate Programs',
    icon: <SchoolIcon fontSize="large" color="primary" />,
    description: 'Explore our wide range of undergraduate programs designed to provide strong foundational knowledge and practical skills.',
    link: '/programs/undergraduate',
    items: [
      'B.Tech in Computer Science & Engineering',
      'B.Tech in Data Science & Engineering',
      'B.Tech in Artificial Intelligence & Machine Learning',
      'B.Tech in Mechanical Engineering',
      'B.Tech in Electronics & Telecommunication',
      'B.Tech in Civil Engineering'
    ]
  },
  {
    title: 'Postgraduate Programs',
    icon: <MenuBookIcon fontSize="large" color="primary" />,
    description: 'Advanced programs designed to provide specialized knowledge and research opportunities.',
    link: '/programs/postgraduate',
    items: [
      'M.Tech in Computer Science & Engineering',
      'M.Tech in Mechanical Engineering',
      'M.Tech in Electronics & Telecommunication',
      'MBA in Technology Management'
    ]
  },
  {
    title: 'Doctoral Programs',
    icon: <PeopleIcon fontSize="large" color="primary" />,
    description: 'Research-focused programs for those seeking to make significant contributions to their field.',
    link: '/programs/doctoral',
    items: [
      'Ph.D. in Engineering',
      'Ph.D. in Technology',
      'Ph.D. in Management'
    ]
  }
];

const academicCalendar = [
  { id: 1, title: 'Academic Year 2024-25', date: 'June 1, 2024', link: '#' },
  { id: 2, title: 'Semester Exam Schedule', date: 'November 15, 2024', link: '#' },
  { id: 3, title: 'Winter Break', date: 'December 25, 2024 - January 5, 2025', link: '#' },
  { id: 4, title: 'Summer Internship', date: 'May 1 - June 30, 2025', link: '#' },
];

const departments = [
  { name: 'Computer Science & Engineering', icon: <ComputerIcon /> },
  { name: 'Data Science & Engineering', icon: <ComputerIcon /> },
  { name: 'Artificial Intelligence & Machine Learning', icon: <ComputerIcon /> },
  { name: 'Mechanical Engineering', icon: <EngineeringIcon /> },
  { name: 'Electronics & Telecommunication', icon: <ScienceIcon /> },
  { name: 'Civil Engineering', icon: <ApartmentIcon /> },
];

function Academics() {

  return (
    <Box className="academics-page">
      {/* Hero Section */}
      <Box className="academics-hero">
        <Container maxWidth="xl" className="hero-container">
          <Box className="hero-content">
            <Typography variant="h1" className="hero-title">
              Academic Excellence
            </Typography>
            <Typography variant="h5" className="hero-subtitle">
              Nurturing Future Leaders Through Quality Education
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Programs Section */}
      <Box className="section programs-section">
        <Container maxWidth="xl">
          <Typography variant="h2" className="section-title">
            Our Programs
          </Typography>
          <Grid container spacing={4} className="programs-grid">
            {programs.map((program, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card className="program-card">
                  <CardContent>
                    <Box className="program-icon">
                      {program.icon}
                    </Box>
                    <Typography variant="h3" className="program-title">
                      {program.title}
                    </Typography>
                    <Typography variant="body1" className="program-description">
                      {program.description}
                    </Typography>
                    <List className="program-list">
                      {program.items.map((item, i) => (
                        <ListItem key={i} className="program-list-item">
                          <ListItemIcon className="list-icon">
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                    <Button 
                      variant="outlined" 
                      color="primary" 
                      component={Link} 
                      to={program.link}
                      className="learn-more-btn"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Departments Section */}
      <Box className="section departments-section alt-bg">
        <Container maxWidth="xl">
          <Typography variant="h2" className="section-title">
            Our Departments
          </Typography>
          <Grid container spacing={3} className="departments-grid">
            {departments.map((dept, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <Paper elevation={2} className="department-card">
                  <Box className="dept-icon">
                    {dept.icon}
                  </Box>
                  <Typography variant="h4" className="dept-name">
                    {dept.name}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Academic Calendar */}
      <Box className="section calendar-section">
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" className="section-title">
                Academic Calendar
              </Typography>
              <Typography variant="body1" className="section-description">
                Stay updated with important academic dates, events, and deadlines throughout the academic year.
              </Typography>
              <List className="calendar-list">
                {academicCalendar.map((event) => (
                  <ListItem key={event.id} className="calendar-event">
                    <ListItemIcon className="calendar-icon">
                      <CalendarIcon color="primary" />
                    </ListItemIcon>
                    <Box className="event-details">
                      <Typography variant="h4" className="event-title">
                        {event.title}
                      </Typography>
                      <Typography variant="body2" className="event-date">
                        {event.date}
                      </Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
              <Button 
                variant="contained" 
                color="primary" 
                className="view-calendar-btn"
                component={Link}
                to="/academics/calendar"
              >
                View Full Calendar
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Academic Resources */}
      <Box className="section resources-section alt-bg">
        <Container maxWidth="xl">
          <Typography variant="h2" className="section-title">
            Academic Resources
          </Typography>
          <Grid container spacing={4} className="resources-grid">
            <Grid item xs={12} md={4}>
              <Card className="resource-card">
                <CardContent>
                  <LibraryIcon color="primary" className="resource-icon" />
                  <Typography variant="h3" className="resource-title">
                    Library
                  </Typography>
                  <Typography variant="body1" className="resource-description">
                    Access to a vast collection of books, journals, and digital resources to support your academic journey.
                  </Typography>
                  <Button 
                    variant="text" 
                    color="primary" 
                    endIcon={<ExpandMoreIcon />}
                    className="resource-link"
                  >
                    Explore Library
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className="resource-card">
                <CardContent>
                  <AssessmentIcon color="primary" className="resource-icon" />
                  <Typography variant="h3" className="resource-title">
                    Examination
                  </Typography>
                  <Typography variant="body1" className="resource-description">
                    Information about examination schedules, results, and academic regulations.
                  </Typography>
                  <Button 
                    variant="text" 
                    color="primary" 
                    endIcon={<ExpandMoreIcon />}
                    className="resource-link"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className="resource-card">
                <CardContent>
                  <PeopleIcon color="primary" className="resource-icon" />
                  <Typography variant="h3" className="resource-title">
                    Student Support
                  </Typography>
                  <Typography variant="body1" className="resource-description">
                    Comprehensive support services including counseling, career guidance, and academic advising.
                  </Typography>
                  <Button 
                    variant="text" 
                    color="primary" 
                    endIcon={<ExpandMoreIcon />}
                    className="resource-link"
                  >
                    Get Support
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box className="section faq-section">
        <Container maxWidth="md">
          <Typography variant="h2" className="section-title">
            Frequently Asked Questions
          </Typography>
          <Box className="faq-container">
            <Accordion className="faq-item">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h4">What are the admission requirements for undergraduate programs?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Admission to our undergraduate programs requires completion of 10+2 or equivalent with a minimum of 50% aggregate marks in Physics, Chemistry, and Mathematics. Additionally, candidates must qualify in the relevant entrance examination (JEE Main/MHT-CET).
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="faq-item">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography variant="h4">How can I apply for financial aid or scholarships?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We offer various scholarships and financial aid options for deserving and meritorious students. You can apply through our online scholarship portal, and our financial aid office will review your application based on academic performance and financial need.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="faq-item">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography variant="h4">What research opportunities are available for students?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Our institution provides numerous research opportunities through various centers of excellence, industry collaborations, and faculty-led projects. Students can participate in research as early as their second year and may have their work published in reputed journals.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Academics;
