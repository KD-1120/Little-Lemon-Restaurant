import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutPage = () => {
  const headerStyle = {
    fontFamily: "'Lemonada', cursive",
    fontWeight: 700,
    color: "#333",
    fontSize: "2.2rem",
  };

  const subHeaderStyle = {
    fontFamily: "'Lemonada', cursive",
    fontWeight: 700,
    color: "#333",
    fontSize: "2rem",
  };

  const highlightedTextStyle = {
    color: "#F2D426",
  };

  const paragraphStyle = {
    color: "#6c757d",
    fontSize: "1rem",
    lineHeight: "1.8",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "8px",
  };

  return (
    <Container fluid className="p-5">
      {/* Section 1: Above the Image */}
      <Row className="align-items-center mb-5">
        <Col md={6} className="text-md-start text-center">
          <h1 style={headerStyle}>
          We bring the {" "}
        <span style={highlightedTextStyle}>warmth</span> and{" "}
        </h1>
          <h1 style={headerStyle}>
            <span style={highlightedTextStyle}>zest</span> {" "}
            of the Mediterranean to the vibrant streets of Chicago
          </h1>
        </Col>
        <Col md={6} className="text-md-start text-center">
          <p style={paragraphStyle}>
          Founded by twin brothers, Amir and Elias Zayed,
          who share a lifelong passion for Mediterranean
          cuisine, Little Lemon is more than just a restaurant –
          it's a celebration of flavors, tradition, and family.
          </p>
        </Col>
      </Row>

      {/* Section 2: Image */}
      <Row className="mb-5">
        <Col md={12} className="text-center">
          <img
            src="https://via.placeholder.com/1200x400"
            alt="Team working"
            style={imageStyle}
          />
        </Col>
      </Row>

      {/* Section 3: Below the Image */}
      <Row className="align-items-center">
        <Col md={6} className="text-md-start text-center">
          <h2 style={subHeaderStyle}>Together we are strong</h2>
        </Col>
        <Col md={6} className="text-md-start text-center">
          <p style={paragraphStyle}>
          At Little Lemon, we’re committed to fresh, high-quality ingredients and bold yet simple flavors. From hand-crafted hummus and tzatziki to expertly grilled meats, seafood, and vibrant vegetarian dishes, we aim to make every meal an invitation to indulge in the heart of the Mediterranean. Our signature lemon-infused dishes – like the chargrilled lamb chops and sumac-spiced chicken – are served alongside a selection of seasonal salads and sides that celebrate the beauty of simple, fresh produce.

          </p>
          <p style={paragraphStyle}>
          Whether you're here for a casual lunch or a romantic dinner, the welcoming atmosphere, attentive service, and signature dishes prepared by the Zayed brothers will make your dining experience unforgettable. Amir, with his knack for blending traditional recipes with innovative techniques, and Elias, the master of perfecting classic Mediterranean flavors, bring a touch of magic to every plate they create.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
