import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; // Bootstrap Button
import { Box, Tabs, Tab, Skeleton } from '@mui/material'; // MUI Tabs, Box, Skeleton
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0); // Use tab index
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for meals

  // Fetch categories on mount
  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        setCategories(response.data.categories);
        if (response.data.categories.length > 0) {
          setSelectedTabIndex(0); // Set first tab as default
        }
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  // Fetch meals based on selected tab index
  useEffect(() => {
    if (categories.length > 0) {
      const selectedCategory = categories[selectedTabIndex]?.strCategory;
      if (selectedCategory) {
        setLoading(true); // Set loading to true before fetching
        axios
          .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
          .then(response => {
            setMeals(response.data.meals);
            setLoading(false); // Turn off loading after fetching
          })
          .catch(error => {
            console.error('Error fetching meals:', error);
            setLoading(false);
          });
      }
    }
  }, [selectedTabIndex, categories]);

  // Inline styles
  const styles = {
    heading: {
      fontFamily: "'Lemonada', cursive",
      fontWeight: 500,
      textAlign: 'center',
      marginBottom: '2rem',
    },
    cardTitle: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 400,
    },
    priceText: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 500,
      fontSize: '1.1rem',
    },
    container: {
      marginTop: '2rem',
    },
    tabsContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '2rem',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    skeletonCard: {
      height: '100%',
    },
  };

  // Handle Tab change
  const handleCategoryChange = (event, newValue) => {
    setSelectedTabIndex(newValue); // Update based on tab index
  };

  return (
    <Container style={styles.container}>
      <Row>
        <Col>
          <h1 style={styles.heading}>Menu</h1>
        </Col>
      </Row>

      {/* Category Tabs */}
      <Box style={styles.tabsContainer}>
        <Tabs
          value={selectedTabIndex} // Index-based selection
          onChange={handleCategoryChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="meal categories tabs"
        >
          {categories.map((category, index) => (
            <Tab
              key={category.idCategory}
              label={category.strCategory}
              value={index} // Use index as value
            />
          ))}
        </Tabs>
      </Box>

      {/* Meals Grid */}
      <Row className="g-4">
        {/* Show loading skeletons while meals are being fetched */}
        {loading
          ? Array.from(new Array(6)).map((_, index) => (
              <Col xs={12} md={6} lg={4} key={index}>
                <Card className="h-100">
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    height={200}
                    style={styles.skeletonCard}
                  />
                  <Card.Body>
                    <Skeleton width="80%" />
                    <Skeleton width="40%" />
                  </Card.Body>
                </Card>
              </Col>
            ))
          : meals.length === 0 && (
              <Col>
                <p>No meals available for this category.</p>
              </Col>
            )}

        {/* Display meals once fetched */}
        {!loading &&
          meals.map((meal) => (
            <Col xs={12} md={6} lg={4} key={meal.idMeal}>
              <Card className="h-100">
                <Card.Img src={meal.strMealThumb} alt={meal.strMeal} />
                <Card.Body>
                  <Card.Title style={styles.cardTitle}>{meal.strMeal}</Card.Title>
                  <div style={styles.buttonContainer}>
                    <span style={styles.priceText}>
                      ${Math.floor(Math.random() * (75 - 25) + 25)}
                    </span>
                    <Button variant="warning" style={{
                        fontFamily: '"Manrope", Sans-Serif',
                        fontWeight: '600',
                        color: 'white'
                    }}>Order Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default OrderPage;
