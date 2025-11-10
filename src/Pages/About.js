import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  IconButton,
  Button,
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Link } from 'react-router-dom';
import { 
  School as SchoolIcon, 
  EmojiEvents as EmojiEventsIcon,
  People as PeopleIcon,
  Engineering as EngineeringIcon,
  MenuBook as MenuBookIcon,
  Computer as ComputerIcon,
  Science as ScienceIcon,
  Apartment as ApartmentIcon,
  LocationOn as LocationOnIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Public as PublicIcon
} from '@mui/icons-material';
import aboutImg from '../Assests/aboutImg.jpg';
import '../styles/About.css';

function About() {
  const theme = useTheme();
  useMediaQuery(theme.breakpoints.down('md')); // For responsive behavior
  
  // Vision and Mission data
  const aboutSections = [
    {
      title: 'Our Vision',
      content: 'To be a premier institution of technical education and research, creating competent professionals with ethical values and social commitment.',
      icon: <SchoolIcon fontSize="large" color="primary" />
    },
    {
      title: 'Our Mission',
      content: 'To provide quality technical education through effective teaching-learning process, research and innovation, industry collaboration, and holistic development of students.',
      icon: <EmojiEventsIcon fontSize="large" color="primary" />
    },
    {
      title: 'Our Values',
      content: 'Excellence, Integrity, Innovation, Inclusivity, and Social Responsibility are the core values that guide our institution.',
      icon: <PeopleIcon fontSize="large" color="primary" />
    }
  ];

  // Departments data
  const departments = [
    { name: 'Computer Engineering', icon: <ComputerIcon /> },
    { name: 'Information Technology', icon: <MenuBookIcon /> },
    { name: 'Mechanical Engineering', icon: <EngineeringIcon /> },
    { name: 'Electronics & Telecommunication', icon: <ScienceIcon /> },
    { name: 'Civil Engineering', icon: <ApartmentIcon /> }
  ];

  // Key achievements
  const achievements = [
    { value: '35+', label: 'Years of Excellence' },
    { value: '15,000+', label: 'Alumni Network' },
    { value: '50+', label: 'Faculty Members' },
    { value: '95%', label: 'Placement Record' }
  ];

  return (
    <Box sx={{ 
      width: '100%', 
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Hero Section */}
      <Box 
        className="about-hero" 
        sx={{ 
          position: 'relative',
          width: '100%',
          height: { xs: '50vh', sm: '55vh', md: '60vh' },
          minHeight: { xs: '400px', sm: '450px' },
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1
          }
        }}
      >
        <Box 
          component="img"
          src={aboutImg}
          alt="D Y Patil College of Engineering & Technology"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        />
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          p: 3
        }}>
          <Typography variant="h2" component="h1" sx={{ 
            fontWeight: 700, 
            mb: 2,
            fontSize: { xs: '2rem', md: '3.5rem' },
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            About D Y Patil College of Engineering & Technology
          </Typography>
          <Typography variant="h5" sx={{ 
            maxWidth: '800px',
            mb: 4,
            textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
          }}>
            Accredited 'A' by NAAC | Established in 1984
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            component={Link}
            to="/admissions"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: '50px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 25px rgba(0,0,0,0.3)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Apply Now
          </Button>
        </Box>
      </Box>

      {/* About Content */}
      <Container 
        maxWidth="xl" 
        sx={{ 
          py: { xs: 4, md: 6 },
          px: { xs: 2, sm: 3, md: 4 },
          '& .MuiContainer-root': {
            paddingLeft: { xs: 2, sm: 3, md: 4 },
            paddingRight: { xs: 2, sm: 3, md: 4 },
            maxWidth: '1280px',
            margin: '0 auto'
          },
          width: '100%',
          maxWidth: '100% !important',
          margin: 0,
          '& > .MuiBox-root': {
            maxWidth: '1280px',
            margin: '0 auto',
            width: '100%',
            padding: { xs: '0 16px', sm: '0 24px', md: '0 32px' }
          }
        }}
      >
        {/* Welcome Section */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 700, 
              mb: { xs: 3, md: 4 },
              color: 'primary.main',
              textAlign: 'center',
              position: 'relative',
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
              '&:after': {
                content: '""',
                display: 'block',
                width: { xs: '60px', md: '80px' },
                height: '4px',
                backgroundColor: 'secondary.main',
                margin: { xs: '15px auto 0', md: '20px auto 0' },
                borderRadius: '2px'
              }
            }}
          >
            Welcome to D Y Patil College of Engineering & Technology
          </Typography>
          
          <Grid container spacing={4} alignItems="center" sx={{ width: '100%', margin: 0 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                Established in the academic year 1984-85, D. Y. Patil College of Engineering & Technology is a premier institution 
                among the vast D. Y. Patil group of institutions. The college was inaugurated on 6th August 1984 by the late Hon. 
                Vasantrao Dada Patil, the former Chief Minister of Maharashtra.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                The institution has been conferred with 'A' grade accreditation by NAAC (National Assessment and Accreditation Council) 
                and has been granted Autonomous status by UGC, New Delhi and Shivaji University, Kolhapur in 2020, a testament to 
                our commitment to academic excellence and quality education.
              </Typography>
              <Button 
                variant="outlined" 
                color="primary" 
                size="large"
                component={Link}
                to="/virtual-tour"
                endIcon={<PublicIcon />}
                sx={{
                  mt: 2,
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '50px',
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px',
                  },
                }}
              >
                Take a Virtual Tour
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                src={aboutImg}
                alt="College Campus"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Vision, Mission, Values */}
        <Box sx={{ my: 8 }}>
          <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: { xs: 3, md: 0 } }}>
            {aboutSections.map((section, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  elevation={3} 
                  sx={{ 
                    height: '100%',
                    p: 3,
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: 6,
                    },
                    borderTop: '4px solid',
                    borderColor: 'primary.main',
                    borderRadius: 2
                  }}
                >
                  <Box sx={{ 
                    width: 80, 
                    height: 80, 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: 'primary.main'
                  }}>
                    {section.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                    {section.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {section.content}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Departments */}
        <Box sx={{ my: 8 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 700, 
              mb: { xs: 4, md: 6 },
              color: 'primary.main',
              textAlign: 'center',
              position: 'relative',
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
              '&:after': {
                content: '""',
                display: 'block',
                width: '60px',
                height: '3px',
                backgroundColor: 'secondary.main',
                margin: { xs: '12px auto 0', md: '15px auto 0' },
                borderRadius: '2px'
              }
            }}
          >
            Our Departments
          </Typography>
          
          <Grid container spacing={{ xs: 2, sm: 3 }}>
            {departments.map((dept, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} sx={{ mb: { xs: 2, sm: 0 } }}>
                <Paper 
                  elevation={2} 
                  sx={{ 
                    p: 3, 
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 4,
                      backgroundColor: 'primary.light',
                      color: 'primary.contrastText',
                      '& .MuiSvgIcon-root': {
                        color: 'primary.contrastText'
                      }
                    },
                    borderRadius: 2,
                    borderLeft: '4px solid',
                    borderColor: 'secondary.main'
                  }}
                >
                  <Box sx={{ 
                    color: 'primary.main',
                    '& .MuiSvgIcon-root': {
                      fontSize: '2.5rem'
                    }
                  }}>
                    {dept.icon}
                  </Box>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 0 }}>
                    {dept.name}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Achievements */}
        <Box sx={{ 
          my: 8,
          backgroundColor: 'primary.main',
          color: 'white',
          borderRadius: 2,
          p: 4,
          boxShadow: 3
        }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 700, 
              mb: 6, 
              textAlign: 'center',
              position: 'relative',
              '&:after': {
                content: '""',
                display: 'block',
                width: '60px',
                height: '3px',
                backgroundColor: 'secondary.main',
                margin: '15px auto 0',
                borderRadius: '2px'
              }
            }}
          >
            Our Achievements
          </Typography>
          
          <Grid container spacing={3} sx={{ textAlign: 'center' }}>
            {achievements.map((item, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Typography variant="h3" component="div" sx={{ fontWeight: 700, color: 'secondary.main' }}>
                  {item.value}
                </Typography>
                <Typography variant="h6" component="div" sx={{ fontWeight: 500 }}>
                  {item.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Contact Info */}
        <Box sx={{ 
          my: { xs: 4, md: 6 }, 
          textAlign: 'center',
          width: '100%',
          '& .MuiGrid-container': {
            justifyContent: 'center',
            '& .MuiGrid-item': {
              display: 'flex',
              justifyContent: 'center'
            }
          }
        }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 700, 
              mb: 6, 
              color: 'primary.main',
              position: 'relative',
              display: 'inline-block',
              '&:after': {
                content: '""',
                display: 'block',
                width: '60px',
                height: '3px',
                backgroundColor: 'secondary.main',
                margin: '15px auto 0',
                borderRadius: '2px'
              }
            }}
          >
            Contact Us
          </Typography>
          
          <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mt: { xs: 1, md: 2 }, textAlign: 'left' }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOnIcon color="primary" sx={{ mr: 2, fontSize: '2rem' }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Address</Typography>
                  <Typography variant="body1">Kasaba Bawada, Kolhapur - 416006, Maharashtra, India</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmailIcon color="primary" sx={{ mr: 2, fontSize: '2rem' }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Email</Typography>
                  <Typography variant="body1">info@dypgroup.edu.in</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhoneIcon color="primary" sx={{ mr: 2, fontSize: '2rem' }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Phone</Typography>
                  <Typography variant="body1">+91-231-2601444 / 2601445</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          
          {/* Social Media Links */}
          <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center', gap: 2 }}>
            {[/* Add social media links here */].map((social, index) => (
              <IconButton
                key={index}
                aria-label={social.label}
                sx={{
                  backgroundColor: 'white',
                  color: social.color,
                  '&:hover': {
                    backgroundColor: social.color,
                    color: 'white',
                    transform: 'translateY(-3px)'
                  },
                  transition: 'all 0.3s ease',
                  boxShadow: 2,
                  width: '50px',
                  height: '50px'
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
