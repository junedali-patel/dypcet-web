import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Container, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../Assests/logo.png';
import '../styles/Navbar.css';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Academics', path: '/academics' },
    { text: 'Departments', path: '/departments' },
    { text: 'Admissions', path: '/admissions' },
    { text: 'Placements', path: '/placements' },
    { text: 'Research', path: '/research' },
    { text: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <div className="drawer-container">
      <div className="drawer-header">
        <img src={logo} alt="College Logo" className="mobile-logo" />
        <IconButton onClick={handleDrawerToggle} className="close-button">
          <CloseIcon />
        </IconButton>
      </div>
      <List>
        {navItems.map((item) => (
          <ListItem 
            button 
            key={item.text} 
            component={NavLink} 
            to={item.path}
            onClick={handleDrawerToggle}
            className={`drawer-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <div className={`top-bar ${scrolled ? 'scrolled' : ''}`}>
        <Container maxWidth="xl" className="top-bar-container">
          <div className="top-bar-left">
            <span>Email: info@dypgroup.edu.in</span>
            <span>Phone: +91 1234567890</span>
          </div>
          <div className="top-bar-right">
            <Button variant="contained" color="primary" size="small" className="apply-now">
              Apply Now
            </Button>
          </div>
        </Container>
      </div>

      <AppBar position="fixed" className={`app-bar ${scrolled ? 'scrolled' : ''}`}>
        <Container maxWidth="xl">
          <Toolbar disableGutters className="toolbar">
            <div className="logo-container">
              <img src={logo} alt="College Logo" className="logo" />
              <div className="logo-text">
                <h1>D Y Patil College of Engineering</h1>
                <p>Approved by AICTE, Affiliated to Mumbai University</p>
              </div>
            </div>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className="menu-button"
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <nav className="desktop-nav">
                {navItems.map((item) => (
                  <Button
                    key={item.text}
                    component={NavLink}
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.text}
                  </Button>
                ))}
              </nav>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        className="mobile-drawer"
      >
        {drawer}
      </Drawer>
      <Toolbar className="toolbar-margin" /> {/* This pushes content below the fixed AppBar */}
    </>
  );
}

export default Navbar;
