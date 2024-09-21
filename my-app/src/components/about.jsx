import React from 'react'
import {Col, Row} from 'react-bootstrap'
import AboutImg from '../assets/about.png'

export const About = () => {
    const styles ={
        page :{
            marginBottom: "5em"
        },
        colText :{
            paddingLeft: '4em',
            paddingRight: '4em',
            textAlign: 'left',
        },
        title :{
            fontFamily: '"Lemonada", Sans-Serif',
            fontSize: "40px",
            fontWeight: "600",
        },
        pText :{
            fontFamily: '"Manrope", Sans-Serif',
            fontSize: '16px',
            textAlign: 'justify'
        },
        image :{
            width: '80%',
            height : ''
        }
    }
  return (
    <>
<Row style={styles.page}>
    <Col md={6} style={styles.colText}>
    <h1 style={styles.title}>
    Little Lemon
    </h1>
    <p style={styles.pText}>
        Chicago
    </p>
    <p style={styles.pText}>
    At Little Lemon, we bring the warmth and zest of the Mediterranean to the vibrant streets of Chicago. Our restaurant is built on a passion for fresh, high-quality ingredients, simple yet bold flavors, and a commitment to serving delicious meals that feel like home. From hand-crafted hummus to expertly grilled meats and seafood, every dish reflects our love for authentic Mediterranean cuisine with a modern twist.
    <p>Founded by a team of food lovers, Little Lemon is a place where you can relax, enjoy great company, and indulge in flavorful dishes prepared with care. Whether you’re here for a casual lunch, a romantic dinner, or celebrating with family and friends, our welcoming atmosphere and attentive service will make your dining experience truly special.
 Come taste the sunshine, and let us treat you to a meal that’s fresh, flavorful, and full of heart!</p>
    </p>
    </Col>
    <Col md={6}>
    <img src={AboutImg} alt='two founders' style={styles.image}/>
    </Col>
</Row>

    </>
  )
}
