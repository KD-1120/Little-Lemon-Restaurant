import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import Logo from '../assets/logo.svg';

const NavigationBar = () => {
  const location = useLocation(); // Get the current path

  const styles = {
    navigationBar: {
      fontFamily: "'Manrope', sans-serif",
      backgroundColor: "white",
      padding: "0.25em 0",
    },
    brandName: {
      fontSize: "1.4em",
      fontWeight: "regular",
      marginLeft: "0.25em",
      color: "#000",
    },
    navItem: {
      color: "#333",
      fontSize: "14px",
      marginLeft: "1.5em",
      textDecoration: 'none',
      position: 'relative',
      paddingBottom: '0.25em',
      transition: 'color 0.3s ease',
    },
    navItemHover: {
      color: "#F2D426", /* Yellow hover */
      fontWeight: 'bold'
    },
    navItemActive: {
      color: "#F2D426", /* Yellow active */
      fontWeight: "bold",
    },
    activeUnderline: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      height: '4px',
      borderRadius: '5px',
      backgroundColor: "#F2D426",
      transition: 'width 0.3s ease',
    },
    inactiveUnderline: {
      width: '0',
    },
    loginBtn: {
      backgroundColor: "#F2D426", /* Yellow button */
      border: "none",
      color: "white",
      fontWeight: "600",
      padding: "0.5em 1.5em",
      marginRight: "1em",
    },
    searchIcon: {
      color: "black",
      fontSize: "1.2em",
      marginLeft: "1em",
    },
    searchIconHover: {
      color: '#ffc107',
    },
    responsiveNavItem: {
      marginLeft: '0',
      marginRight: '0.5em',
    },
    responsiveLoginBtn: {
      marginTop: '0.5em',
      width: '100%',
    },
  };

  // Determine if the link is active by matching the pathname
  const isActive = (path) => location.pathname === path;

  return (
    <Navbar collapseOnSelect expand="lg" style={styles.navigationBar} sticky="top">
      <Container>
        {/* Logo Section */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={Logo}
            alt="Little Lemon"
            width="263"
            height="104"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Toggle Button for Mobile View */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="/" style={styles.navItem}>
              Home
              <div style={isActive('/') ? styles.activeUnderline : styles.inactiveUnderline}></div>
            </Nav.Link>
            <Nav.Link href="/about" style={styles.navItem}>
              About
              <div style={isActive('/about') ? styles.activeUnderline : styles.inactiveUnderline}></div>
            </Nav.Link>
            <Nav.Link href="/reservations" style={styles.navItem}>
              Reservations
              <div style={isActive('/reservations') ? styles.activeUnderline : styles.inactiveUnderline}></div>
            </Nav.Link>
            <Nav.Link href="/order" style={styles.navItem}>
              Order Online
              <div style={isActive('/order') ? styles.activeUnderline : styles.inactiveUnderline}></div>
            </Nav.Link>
            <Nav.Link href="/blog" style={styles.navItem}>
              Blog
              <div style={isActive('/blog') ? styles.activeUnderline : styles.inactiveUnderline}></div>
            </Nav.Link>
          </Nav>

          {/* Login Button and Search Icon */}
          <Nav className="d-flex align-items-center">
            <Button variant="warning" style={styles.loginBtn}>Login</Button>
            <Nav.Link href="/search" style={styles.searchIcon}>
              <BsSearch />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
