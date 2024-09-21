import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Food from '../assets/food.png';

const CTA = () => {
    const styles = {
        ctaBackground: {
            backgroundColor: '#D9D9D9',
            width: '90%',
            height: '100%',
            margin: '3.5em',
            padding: '2em',
            border: 'none',
            borderRadius: '10px'
        },
        circleImg: {
            width: "100%",
            maxWidth: "380px",
            height: "auto",
            border: "none",
            borderRadius: '50%',
            overflow: 'hidden'
        },
        ctaTitle: {
            fontFamily: '"Lemonada", Sans-Serif',
            fontSize: '40px',
            fontWeight: '600'
        },
        text: {
            fontSize: '16px',
            fontFamily: '"Manrope", Sans-Serif',
            padding: '2em 0',
            paddingBottom: '0.5em',
            textAlign: 'justify'
        },
        bookBtn: {
            backgroundColor: "#F2D426",
            color: "white",
            fontFamily: '"Manrope", Sans-Serif',
            fontSize: '16px',
            fontWeight: '600',
            padding: '0.75em'
        },
        img: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        }
    };
    return (
        <>
            <Row style={styles.ctaBackground}>
                <Col xs={12} md={5} className="d-flex justify-content-center align-items-center mb-3 mb-md-0">
                    <div style={styles.circleImg}>
                        <img src={Food} alt='food' style={styles.img} />
                    </div>
                </Col>
                <Col xs={12} md={7}>
                    <h1 style={styles.ctaTitle}>
                        Customize Your Dining Experience at Little Lemon!
                    </h1>
                    <p style={styles.text}>
                        We are excited to offer you the option to personalize your seating arrangements when making a reservation. Whether you're celebrating a birthday, anniversary, or just enjoying a casual night out, you can now select your preferred seating option and tell us about your special occasion.
                        <p>Feel free to add any comments or special requests to make your experience unforgettable. Let us know what we can do to make your visit even more special from the moment you book!</p>
                    </p>
                    <div className="d-flex justify-content-start">
                        <Button variant="warning" style={styles.bookBtn}>
                            Book a Reservation Today
                        </Button>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default CTA;
