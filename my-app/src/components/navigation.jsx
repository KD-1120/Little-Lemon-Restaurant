import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Logo from '../assets/logo.svg';
import { BsSearch } from "react-icons/bs";

const NavigationBar = () => {
    const styles = {
        navigationBar :{
          fontFamily: "'Manrope', sans-serif",
          backgroundColor: "white",
          padding: "0.25em 0",
        },
        brandName :{
          fontSize: "1.4em",
          fontWeight: "regular",
          marginLeft: "0.25em",
          color: "#000",
        },
        navItem :{
          color: "#333",
          fontSize: "14px",
          marginLeft: "1.5em",
          textDecoration: 'none',
        },
        navItemHover :{
          color: "#F2D426", /* Yellow hover */
          fontWeight: 'bold'
        },
        navItemActive :{
          color: "#F2D426", /* Yellow active */
          fontWeight: "bold",
          borderBottom: "2px solid #F2D426",
        },
        loginBtn :{
          backgroundColor: "#F2D426", /* Yellow button */
          border: "none",
          color: "white",
          fontWeight: "600",
          padding: "0.5em 1.5em",
          marginRight: "1em"
        },
        searchIcon :{
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
        }
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
            <Nav.Link href="/" style={styles.navItem} className="active" activeStyle={styles.navItemActive}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" style={styles.navItem}>About</Nav.Link>
            <Nav.Link href="/reservations" style={styles.navItem}>Reservations</Nav.Link>
            <Nav.Link href="/order" style={styles.navItem}>Order Online</Nav.Link>
            <Nav.Link href="/blog" style={styles.navItem}>Blog</Nav.Link>
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
