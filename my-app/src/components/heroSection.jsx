import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import HeroImg from '../assets/heroImg.png';

const HeroSection = () => {
  const styles = {
    heroSection: {
      position: 'relative',
      backgroundImage: `url(${HeroImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: "100vw",
      height: '100vh',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1,
    },
    content: {
      position: 'relative',
      zIndex: 2,
      padding: '2em',
      textAlign: 'left',
    },
    title: {
      fontFamily: "'Lemonada', sans-serif",
      fontSize: '64px',
      fontWeight: 600,  // Semibold
      marginBottom: '0.5em',
    },
    location: {
      fontFamily: "'Manrope', sans-serif",
      fontSize: '18px',
      fontWeight: 400,  // Regular
      marginBottom: '0.5em',
    },
    description: {
      fontFamily: "'Manrope', sans-serif",
      fontSize: '18px',
      fontWeight: 400,  // Regular
      marginBottom: '1.5em',
    },
    button: {
      backgroundColor: '#F2D426',
      border: 'none',
      color: 'black',
      fontWeight: 'bold',
      padding: '0.75em',
      fontSize: '18px',
      fontFamily: "'Manrope', sans-serif",
    },
  };

  return (
    <div style={styles.heroSection}>
      {/* Overlay that covers the entire background */}
      <div style={styles.overlay}></div>
      <Container>
        <Row className="justify-content-start">
          <Col md={6}>
            <div style={styles.content}>
              <h1 style={styles.title}>Little Lemon</h1>
              <p style={styles.location}>Chicago</p>
              <p style={styles.description}>
                Whether you stop by for a quick lunch, a cozy dinner, or a weekend brunch,
                each meal is individually crafted to create a unique and memorable experience.
                Come and enjoy a taste of sunshine with every bite!
              </p>
              <Button style={styles.button}>Book a Table Online</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
