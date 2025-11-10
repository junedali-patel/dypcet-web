import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  IconButton, 
  Avatar,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  KeyboardArrowLeft, 
  KeyboardArrowRight, 
  School, 
  EmojiEvents, 
  Group, 
  Business, 
  Star, 
  StarHalf,
  PlayCircleOutline,
  EventAvailable,
  Science,
  Groups,
  Work
} from '@mui/icons-material';
import CountUp from 'react-countup';
import img1 from '../Assests/home.jpg';
import img2 from '../Assests/himg.png';
import '../styles/Home.css';

// Sample images for slider
const sliderImages = [
  { id: 1, src: img1, alt: 'Campus View', title: 'Welcome to D Y Patil College of Engineering', subtitle: 'Excellence in Technical Education' },
  { id: 2, src: img2, alt: 'Students', title: 'Shaping Future Leaders', subtitle: 'Innovation, Research, and Excellence' },
  { id: 3, src: img1, alt: 'Campus Life', title: 'Vibrant Campus Life', subtitle: 'Learning Beyond Classrooms' },
];

// Key features section data
const features = [
  {
    icon: <School fontSize="large" />,
    title: 'Quality Education',
    description: 'Industry-aligned curriculum with experienced faculty members and modern teaching methodologies'
  },
  {
    icon: <Science fontSize="large" />,
    title: 'Research & Innovation',
    description: 'Cutting-edge research facilities and innovation labs to foster creativity'
  },
  {
    icon: <Work fontSize="large" />,
    title: 'Placements',
    description: '90%+ placement rate with top recruiters from leading companies'
  },
  {
    icon: <Groups fontSize="large" />,
    title: 'Vibrant Campus Life',
    description: 'Diverse clubs, events, and activities for holistic development'
  }
];

// Statistics data
const statistics = [
  { count: 5000, suffix: '+', label: 'Students', icon: <Group fontSize="large" /> },
  { count: 250, suffix: '+', label: 'Expert Faculty', icon: <School fontSize="large" /> },
  { count: 100, suffix: '+', label: 'Companies Visited', icon: <Business fontSize="large" /> },
  { count: 50, suffix: '+', label: 'Awards Won', icon: <EmojiEvents fontSize="large" /> }
];

// Testimonials data
const testimonials = [
  {
    name: 'Rohit Patil',
    role: 'Alumnus, Google',
    content: 'The education and opportunities I received at D Y Patil College laid the foundation for my career at Google.',
    avatar: 'R',
    rating: 5
  },
  {
    name: 'Dev Patel',
    role: 'Research Scholar, MIT',
    content: 'The research facilities and faculty guidance helped me secure admission to MIT for my PhD.',
    avatar: 'P',
    rating: 5
  },
  {
    name: 'Amit Deshmukh',
    role: 'Entrepreneur',
    content: 'The entrepreneurial cell at the college helped me turn my startup idea into a successful business.',
    avatar: 'A',
    rating: 4.5
  }
];

// Upcoming events data
const upcomingEvents = [
  {
    title: 'Tech Symposium 2024',
    date: '15 DEC',
    description: 'Annual technical festival showcasing innovation and technology',
    icon: <Science />
  },
  {
    title: 'Campus Recruitment Drive',
    date: '20 DEC',
    description: 'Top companies visiting for campus placements',
    icon: <Work />
  },
  {
    title: 'Alumni Meet',
    date: '05 JAN',
    description: 'Annual alumni gathering and networking event',
    icon: <Groups />
  }
];

// Styled components
const HeroSection = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '80vh',
  minHeight: '500px',
  overflow: 'hidden',
  marginBottom: theme.spacing(6),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
}));

const SliderContent = styled('div')({
  position: 'relative',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  textAlign: 'center',
  zIndex: 2,
  padding: '0 20px',
});

const SliderImage = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'opacity 1s ease-in-out',
  opacity: 0,
  '&.active': {
    opacity: 1,
  },
});

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[8],
  },
}));

// Component for rendering star ratings
const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<Star key={i} color="primary" />);
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<StarHalf key={i} color="primary" />);
    } else {
      stars.push(<Star key={i} color="disabled" />);
    }
  }
  
  return <Box display="flex">{stars}</Box>;
};

// Animated counter component
const AnimatedCounter = ({ end, suffix = '', ...props }) => {
  const [countStart, setCountStart] = useState(false);
  const counterRef = useRef(null);
  
  useEffect(() => {
    const currentRef = counterRef.current;
    let observer;

    if (currentRef) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCountStart(true);
            observer.disconnect();
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        }
      );

      observer.observe(currentRef);
    }

    return () => {
      if (observer && currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [counterRef]);
  
  return (
    <Box ref={counterRef}>
      {countStart && (
        <CountUp 
          end={end} 
          duration={2.5} 
          suffix={suffix}
          {...props} 
        />
      )}
      {!countStart && <Box component="span" sx={{ visibility: 'hidden' }}>{end}{suffix}</Box>}
    </Box>
  );
};

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Auto slide functionality
  useEffect(() => {
    let slideInterval;
    
    if (isAutoPlay) {
      slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) => 
          prevSlide === sliderImages.length - 1 ? 0 : prevSlide + 1
        );
      }, 5000);
    }

    return () => clearInterval(slideInterval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === sliderImages.length - 1 ? 0 : prevSlide + 1
    );
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? sliderImages.length - 1 : prevSlide - 1
    );
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const renderTestimonialCard = (testimonial, index) => (
    <Box 
      key={index} 
      sx={{ 
        p: 3, 
        backgroundColor: 'white',
        borderRadius: 2,
        boxShadow: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)'
        }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>{testimonial.avatar}</Avatar>
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">{testimonial.name}</Typography>
          <Typography variant="body2" color="text.secondary">{testimonial.role}</Typography>
        </Box>
      </Box>
      <StarRating rating={testimonial.rating} />
      <Typography variant="body1" sx={{ mt: 2, fontStyle: 'italic', flexGrow: 1 }}>
        "{testimonial.content}"
      </Typography>
    </Box>
  );

  const renderEventCard = (event, index) => (
    <Card 
      key={index} 
      sx={{ 
        display: 'flex', 
        mb: 2, 
        boxShadow: 2,
        '&:hover': {
          boxShadow: 4,
          '& .event-date': {
            backgroundColor: 'primary.main',
            color: 'white'
          }
        }
      }}
    >
      <Box 
        className="event-date"
        sx={{
          width: 80,
          backgroundColor: 'primary.light',
          color: 'primary.contrastText',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          transition: 'all 0.3s ease'
        }}
      >
        <Typography variant="h6" fontWeight="bold">{event.date.split(' ')[0]}</Typography>
        <Typography variant="caption">{event.date.split(' ')[1]}</Typography>
      </Box>
      <Box sx={{ p: 2, flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          {React.cloneElement(event.icon, { color: 'primary', sx: { mr: 1 } })}
          <Typography variant="subtitle1" fontWeight="bold">{event.title}</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {event.description}
        </Typography>
      </Box>
    </Card>
  );

  return (
    <Box className="home-page">
      {/* Hero Slider Section */}
      <HeroSection>
        {sliderImages.map((slide, index) => (
          <SliderImage
            key={slide.id}
            className={index === currentSlide ? 'active' : ''}
            style={{ backgroundImage: `url(${slide.src})` }}
          />
        ))}
        
        <SliderContent>
          <Container maxWidth="md">
            <Typography variant="h2" component="h1" gutterBottom sx={{ 
              fontWeight: 700, 
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }
            }}>
              {sliderImages[currentSlide].title}
            </Typography>
            <Typography variant="h5" component="p" sx={{ 
              mb: 4, 
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
              fontSize: { xs: '1rem', sm: '1.5rem' }
            }}>
              {sliderImages[currentSlide].subtitle}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                color="primary" 
                size="large"
                sx={{ 
                  px: 4, 
                  py: 1.5, 
                  borderRadius: '50px',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1.1rem'
                }}
              >
                Apply Now
              </Button>
              <Button 
                variant="outlined" 
                color="inherit" 
                size="large"
                sx={{ 
                  px: 4, 
                  py: 1.5, 
                  border: '2px solid white',
                  color: 'white',
                  borderRadius: '50px',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  '&:hover': {
                    border: '2px solid white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                Learn More
              </Button>
            </Box>
          </Container>

          {/* Slider Controls */}
          <IconButton 
            onClick={prevSlide}
            sx={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)'
              }
            }}
          >
            <KeyboardArrowLeft fontSize="large" />
          </IconButton>
          <IconButton 
            onClick={nextSlide}
            sx={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)'
              }
            }}
          >
            <KeyboardArrowRight fontSize="large" />
          </IconButton>

          {/* Slider Indicators */}
          <Box sx={{ 
            position: 'absolute', 
            bottom: '30px', 
            display: 'flex', 
            gap: 1 
          }}>
            {sliderImages.map((_, index) => (
              <Box
                key={index}
                onClick={() => goToSlide(index)}
                sx={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: index === currentSlide ? 'white' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.2)'
                  }
                }}
              />
            ))}
          </Box>
        </SliderContent>
      </HeroSection>

      {/* Quick Links Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ 
          fontWeight: 700, 
          color: '#1a237e',
          mb: 6,
          position: 'relative',
          '&:after': {
            content: '""',
            display: 'block',
            width: '80px',
            height: '4px',
            backgroundColor: '#ff5722',
            margin: '15px auto 0',
            borderRadius: '2px'
          }
        }}>
          Why Choose Us
        </Typography>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard elevation={3}>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'rgba(26, 35, 126, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    '& .material-icons': {
                      fontSize: '40px',
                      color: '#1a237e'
                    }
                  }}>
                    <span className="material-icons">{feature.icon}</span>
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ 
                    fontWeight: 600,
                    color: '#1a237e',
                    mb: 2
                  }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Announcements Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ 
            fontWeight: 700, 
            color: '#1a237e',
            mb: 6,
            position: 'relative',
            '&:after': {
              content: '""',
              display: 'block',
              width: '80px',
              height: '4px',
              backgroundColor: '#ff5722',
              margin: '15px auto 0',
              borderRadius: '2px'
            }
          }}>
            Latest News & Events
          </Typography>
          
          <Grid container spacing={4}>
            {[1, 2, 3].map((item) => (
              <Grid item xs={12} md={4} key={item}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item % 2 === 0 ? img1 : img2}
                    alt="News image"
                  />
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 600, mb: 1 }}>
                      {item === 1 ? 'Admission' : item === 2 ? 'Event' : 'Announcement'}
                    </Typography>
                    <Typography variant="h6" component="h3" gutterBottom sx={{ 
                      fontWeight: 600,
                      flexGrow: 1
                    }}>
                      {item === 1 
                        ? 'Admissions Open for Academic Year 2024-25' 
                        : item === 2 
                        ? 'Annual Technical Symposium - TechVista 2024' 
                        : 'Campus Recruitment Drive by Top Companies'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {item === 1 
                        ? 'Applications are now open for all undergraduate and postgraduate programs.' 
                        : item === 2 
                        ? 'Join us for the biggest technical event of the year with workshops and competitions.' 
                        : 'Leading companies will be visiting our campus next month for recruitment.'}
                    </Typography>
                    <Button 
                      variant="text" 
                      color="primary" 
                      sx={{ 
                        alignSelf: 'flex-start',
                        mt: 'auto',
                        px: 0,
                        textTransform: 'none',
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: 'transparent',
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      Read More →
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button 
              variant="outlined" 
              color="primary" 
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white'
                }
              }}
            >
              View All News & Events
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Quick Links Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ 
          fontWeight: 700, 
          color: '#1a237e',
          mb: 6,
          position: 'relative',
          '&:after': {
            content: '""',
            display: 'block',
            width: '80px',
            height: '4px',
            backgroundColor: '#ff5722',
            margin: '15px auto 0',
            borderRadius: '2px'
          }
        }}>
          Quick Links
        </Typography>
        
        <Grid container spacing={4}>
          {[
            { title: 'Admissions', icon: 'school', link: '/admissions' },
            { title: 'Academics', icon: 'menu_book', link: '/academics' },
            { title: 'Departments', icon: 'account_balance', link: '/departments' },
            { title: 'Placements', icon: 'work', link: '/placements' },
            { title: 'Research', icon: 'science', link: '/research' },
            { title: 'Campus Life', icon: 'groups', link: '/campus-life' },
          ].map((item, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Button 
                component={Link} 
                to={item.link}
                variant="outlined"
                fullWidth
                sx={{
                  p: 2,
                  height: '120px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px',
                  borderColor: '#e0e0e0',
                  color: '#1a237e',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                    borderColor: '#1a237e',
                  },
                  '& .material-icons': {
                    fontSize: '2.5rem',
                    mb: 1,
                    color: '#1a237e'
                  }
                }}
              >
                <span className="material-icons">{item.icon}</span>
                <Typography variant="subtitle2" align="center">
                  {item.title}
                </Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Statistics Section */}
      <Box sx={{ 
        backgroundColor: 'primary.main', 
        color: 'white',
        py: 8,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '20px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), transparent)'
        }
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {statistics.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index} sx={{ textAlign: 'center' }}>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center',
                  '&:hover': {
                    '& .stat-icon': {
                      transform: 'scale(1.1) rotate(5deg)'
                    }
                  }
                }}>
                  <Box 
                    className="stat-icon"
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      transition: 'all 0.3s ease',
                      '& .MuiSvgIcon-root': {
                        fontSize: '2.5rem',
                        color: 'white'
                      }
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography 
                    variant="h3" 
                    component="div" 
                    sx={{ 
                      fontWeight: 700,
                      mb: 1,
                      background: 'linear-gradient(90deg, #ffffff, #e0e0e0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    <AnimatedCounter end={stat.count} suffix={stat.suffix} />
                  </Typography>
                  <Typography variant="h6">{stat.label}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ 
          fontWeight: 700, 
          color: 'primary.main',
          mb: 6,
          position: 'relative',
          '&:after': {
            content: '""',
            display: 'block',
            width: '80px',
            height: '4px',
            backgroundColor: 'secondary.main',
            margin: '15px auto 0',
            borderRadius: '2px'
          }
        }}>
          What Our Students Say
        </Typography>
        
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              {renderTestimonialCard(testimonial, index)}
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box sx={{ 
        backgroundImage: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)', 
        color: 'white',
        py: 8,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.05) 0%, transparent 20%)',
          zIndex: 1
        }
      }}>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Box textAlign="center">
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
              Ready to Start Your Journey?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, maxWidth: '700px', mx: 'auto', opacity: 0.9 }}>
              Join our community of innovators, thinkers, and leaders. Apply now for the upcoming academic year.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                color="secondary" 
                size="large"
                sx={{ 
                  px: 4, 
                  py: 1.5, 
                  borderRadius: '50px',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 4
                  }
                }}
              >
                Apply Now
              </Button>
              <Button 
                variant="outlined" 
                color="inherit" 
                size="large"
                sx={{ 
                  px: 4, 
                  py: 1.5, 
                  border: '2px solid white',
                  color: 'white',
                  borderRadius: '50px',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid white',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Virtual Tour
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Upcoming Events Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ 
              fontWeight: 700, 
              color: 'primary.main',
              mb: 4,
              position: 'relative',
              '&:after': {
                content: '""',
                display: 'block',
                width: '80px',
                height: '4px',
                backgroundColor: 'secondary.main',
                marginTop: '15px',
                borderRadius: '2px'
              }
            }}>
              Upcoming Events
            </Typography>
            
            <Box>
              {upcomingEvents.map((event, index) => renderEventCard(event, index))}
            </Box>
            
            <Box textAlign="center" mt={4}>
              <Button 
                variant="outlined" 
                color="primary" 
                endIcon={<EventAvailable />}
                sx={{ 
                  borderRadius: '50px',
                  fontWeight: 600,
                  textTransform: 'none',
                  px: 4,
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                View All Events
              </Button>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              height: '100%', 
              borderRadius: 2, 
              overflow: 'hidden',
              boxShadow: 3,
              position: 'relative',
              '&:hover': {
                '& .play-button': {
                  transform: 'scale(1.1)',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)'
                }
              }
            }}>
              <Box 
                component="img"
                src={img2}
                alt="Campus Tour"
                sx={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  minHeight: isMobile ? '300px' : '100%'
                }} 
              />
              <Box 
                className="play-button"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(5px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.25)'
                  }
                }}
              >
                <PlayCircleOutline sx={{ fontSize: 60, color: 'white' }} />
              </Box>
              <Box 
                sx={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  right: 0, 
                  p: 3,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  color: 'white'
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom>
                  Take a Virtual Tour
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, mb: 2 }}>
                  Explore our state-of-the-art campus facilities and vibrant student life from the comfort of your home.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
