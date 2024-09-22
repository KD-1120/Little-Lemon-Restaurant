import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'; // Import Bootstrap icons
import FooterImg from '../assets/footer-img.png'; // Replace with your logo or image

const Footer = () => {
    const styles = {
        footer: {
            backgroundColor: '#f8f9fa',
            padding: '3em 0',
            marginTop: '3em',
            borderTop: '1px solid #dee2e6'
        },
        logo: {
            width: '150px',
            marginBottom: '1em'
        },
        footerHeading: {
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '1em',
            fontFamily: '"Lemonada", Sans-Serif'
        },
        footerLink: {
            color: '#6c757d',
            textDecoration: 'none',
            display: 'block',
            marginBottom: '0.5em',
            fontSize: '14px',
            fontFamily: '"Manrope", Sans-Serif'
        },
        socialIcon: {
            color: '#495057',
            fontSize: '20px',
            marginRight: '0.75em'
        },
        subscribeBtn: {
            backgroundColor: '#ffc107',
            border: 'none',
            padding: '0.75em',
            fontWeight: 'bold'
        }
    };

    return (
        <footer style={styles.footer}>
            <Container>
                <Row>
                    {/* Logo Section */}
                    <Col md={4} sm={12} className="mb-4">
                        <img src={FooterImg} alt="Little Lemon" style={styles.logo} />
                        <p>
                            Your go-to restaurant for a perfect blend of authentic cuisine and modern taste. Come dine with us and make every meal memorable!
                        </p>
                    </Col>
                    {/* Quick Links Section */}
                    <Col md={4} sm={6} className="mb-4">
                        <h5 style={styles.footerHeading}>Quick Links</h5>
                        <a href="/menu" style={styles.footerLink}>Menu</a>
                        <a href="/about" style={styles.footerLink}>About Us</a>
                        <a href="/contact" style={styles.footerLink}>Contact</a>
                        <a href="/reservations" style={styles.footerLink}>Reservations</a>
                    </Col>
                    {/* Newsletter & Social Icons */}
                    <Col md={4} sm={6}>
                        <h5 style={styles.footerHeading}>Stay Connected</h5>
                        <p>Subscribe to our newsletter for the latest updates and offers!</p>
                        <Form inline className="d-flex mb-3">
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                className="mr-2"
                                style={{ flex: '1' }}
                            />
                            <Button style={styles.subscribeBtn}>Subscribe</Button>
                        </Form>
                        {/* Social Media Icons */}
                        <div className="d-flex">
                            <a href="https://www.facebook.com" style={styles.socialIcon}><BsFacebook /></a>
                            <a href="https://www.twitter.com" style={styles.socialIcon}><BsTwitter /></a>
                            <a href="https://www.instagram.com" style={styles.socialIcon}><BsInstagram /></a>
                            <a href="https://www.linkedin.com" style={styles.socialIcon}><BsLinkedin /></a>
                        </div>
                    </Col>
                </Row>
                {/* Copyright Section */}
                <Row className="mt-4">
                    <Col className="text-center">
                        <p className="text-muted mb-0">© {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
