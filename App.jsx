import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './ProductList';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <h1>Paradise Nursery</h1>
          <p>Where Greenery Meets Serenity</p>
          <AboutUs />
          <button className="get-started-button" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
