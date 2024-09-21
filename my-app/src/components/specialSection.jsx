import React from 'react';
import Image2 from '../assets/image-2.png';
import Image3 from '../assets/image-3.png';
import Image4 from '../assets/image-4.png';

const specials = [
  {
    title: 'Lemon Herb Grilled Chicken',
    price: '$18.99',
    description: 'Tender chicken marinated in fresh lemon juice, Mediterranean herbs, and olive oil, then grilled to perfection. Served with a side of garlic roasted potatoes and a crisp cucumber-tomato salad.',
    image: Image2,
  },
  {
    title: 'Spiced Lamb Kofta Wrap',
    price: '$14.50',
    description: 'Juicy, spiced lamb patties wrapped in warm pita bread with creamy tzatziki, pickled onions, and fresh mint. Accompanied by a side of our signature lemon-dill fries.',
    image: Image3,
  },
  {
    title: 'Roasted Red Pepper Hummus Bowl',
    price: '$11.00',
    description: 'A smooth blend of chickpeas, roasted red peppers, tahini, and garlic, served with a medley of seasonal vegetables and warm pita bread for dipping.',
    image: Image4,
  },
];

const styles = {
  section: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  quote: {
    fontSize: '18px',
    fontStyle: 'italic',
    marginBottom: '10px',
  },
  subtext: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '20px',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: "'Lemonada', sans-serif",
  },
  viewAllButton: {
    backgroundColor: '#F2D426',
    border: 'none',
    color: 'white',
    borderRadius: '10px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  specialsContainer: {
    display: 'flex',
    justifyContent: 'center', // Center the cards
    flexWrap: 'wrap', // Allow wrapping
    gap: '20px', // Use gap here for spacing between items
  },
  specialItem: {
    border: '3px solid #00000010',
    borderRadius: '3px',
    boxSizing: 'border-box',
    padding: '10px',
    width: '300px', // Set a fixed width for the cards
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  itemTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  itemPrice: {
    fontWeight: 'bold',
    color: '#666',
    marginBottom: '10px',
  },
  itemDescription: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '15px',
  },
  orderButton: {
    backgroundColor: '#F2D426',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: 'white',
    width: '100%',
  },
};

const SpecialsSection = () => {
  return (
    <div style={styles.section}>
      <div style={styles.header}>
        <p style={styles.quote}>"One cannot think well, love well, sleep well, if one has not dined well." — Virginia Woolf</p>
        <p style={styles.subtext}>At Little Lemon, we couldn't agree more. Now that you're here, let's take a look at the specials that will make your dining experience truly unforgettable!</p>
      </div>
      <div style={styles.titleContainer}>
        <h2 style={styles.title}>Specials</h2>
        <button style={styles.viewAllButton}>View All</button>
      </div>
      <div style={styles.specialsContainer}>
        {specials.map((special, index) => (
          <div key={index} style={styles.specialItem}>
            <img src={special.image} alt={special.title} style={styles.image} />
            <h3 style={styles.itemTitle}>{special.title}</h3>
            <p style={styles.itemPrice}>{special.price}</p>
            <p style={styles.itemDescription}>{special.description}</p>
            <button style={styles.orderButton}>Order a Delivery</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialsSection;
