import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Play, Pause } from 'lucide-react';
import person1 from '../assets/person-1.png';
import person2 from '../assets/person-2.png';
import person3 from '../assets/person-3.png';

const testimonials = [
  {
    id: 1,
    thumbnail: person1,
    rating: 5,
  },
  {
    id: 2,
    thumbnail: person2,
    rating: 5,
  },
  {
    id: 3,
    thumbnail: person3,
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [playing, setPlaying] = useState({});

  const togglePlay = (id) => {
    setPlaying(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-2" style={{ fontFamily: 'lemonada', fontWeight: 'bold', fontSize: '40px' }}>Testimonials</h2>
      <p className="text-center text-muted mb-4" style={{ fontFamily: 'lemonada', fontWeight: '400', fontSize: '16px' }}>Video testimonials look more authentic and engaging</p>
      <Row className="align-items-start">
        {testimonials.map((testimonial, index) => (
          <Col
            key={testimonial.id}
            xs={12}
            md={4}
            className={`mb-4 ${index === 1 ? 'offset-md-0 mt-md-5' : ''}`}
          >
            <Card className="h-100" style={{ border: 'none', overflow: 'hidden' }}>
              <div className="position-relative">
                <img
                  src={testimonial.thumbnail}
                  alt={`Testimonial from person ${testimonial.id}`}
                  className="card-img-top"
                  style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                />
                <button
                  className="position-absolute top-0 start-0 m-2 btn btn-light rounded-circle p-1"
                  onClick={() => togglePlay(testimonial.id)}
                  style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  {playing[testimonial.id] ? <Pause size={20} /> : <Play size={20} />}
                </button>
              </div>
            </Card>
            <Card.Body className="d-flex justify-content-center">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-warning">★</span>
              ))}
            </Card.Body>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TestimonialsSection;
