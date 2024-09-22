import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaCalendarAlt, FaClock, FaUserAlt, FaSearchLocation } from 'react-icons/fa';

const Reservation = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState(2);
  const [location, setLocation] = useState('');
  const [userLocation, setUserLocation] = useState('Locating...');

  useEffect(() => {
    // Set the default date to the current date
    const currentDate = new Date().toISOString().split('T')[0];
    setDate(currentDate);

    // Set the default time to the current time
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    setTime(currentTime);

    // Get the user's location when the component mounts
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          reverseGeocode(latitude, longitude);
        },
        error => {
          console.error("Error getting location:", error);
          setUserLocation("Unable to retrieve location");
        }
      );
    } else {
      setUserLocation("Geolocation is not supported by your browser");
    }
  };

  const reverseGeocode = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();
      if (data.address) {
        const { city, state, country } = data.address;
        setUserLocation(`${city || state || country}`);
      } else {
        setUserLocation("Location found, but address unavailable");
      }
    } catch (error) {
      console.error("Error in reverse geocoding:", error);
      setUserLocation("Error getting location details");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(`Date: ${date}, Time: ${time}, People: ${people}, Location: ${location}`);
  };

  return (
    <Container className="my-4">
      <Form onSubmit={handleSubmit}>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={2} className="mb-2 mb-md-0">
            <InputGroup>
              <InputGroup.Text><FaCalendarAlt /></InputGroup.Text>
              <Form.Control 
                type="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
                required 
              />
            </InputGroup>
          </Col>
          <Col xs={12} md={2} className="mb-2 mb-md-0">
            <InputGroup>
              <InputGroup.Text><FaClock /></InputGroup.Text>
              <Form.Control 
                type="time" 
                value={time} 
                onChange={(e) => setTime(e.target.value)} 
                required 
              />
            </InputGroup>
          </Col>
          <Col xs={12} md={2} className="mb-2 mb-md-0">
            <InputGroup>
              <InputGroup.Text><FaUserAlt /></InputGroup.Text>
              <Form.Select 
                value={people} 
                onChange={(e) => setPeople(e.target.value)} 
                required
              >
                {[...Array(10).keys()].map(i => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} {i === 0 ? 'person' : 'people'}
                  </option>
                ))}
              </Form.Select>
            </InputGroup>
          </Col>
          <Col xs={12} md={4} className="mb-2 mb-md-0">
            <InputGroup>
              <InputGroup.Text><FaSearchLocation /></InputGroup.Text>
              <Form.Control 
                type="text" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} 
                placeholder="Location or Cuisine"
                required 
              />
            </InputGroup>
          </Col>
          <Col xs={12} md={2}>
            <Button variant="warning" type="submit" className="w-100" style={{
                fontFamily: '"Manrope", Sans-Serif',
                color: 'white',
                fontWeight: '600'
            }}>
              Let's go
            </Button>
          </Col>
        </Row>
      </Form>
      <Row className="mt-3">
        <Col>
          <p className="text-muted text-center">
            It looks like you're in {userLocation}. Not correct?
            <Button 
              variant="link" 
              className="text-danger p-0 ms-1" 
              style={{ textDecoration: 'none' }}
              onClick={getUserLocation}
            >
              Get current location
            </Button>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Reservation;
