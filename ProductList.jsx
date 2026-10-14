import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});
  const [showCart, setShowCart] = useState(false);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://images.unsplash.com/photo-1598880940371-c756e0154ebc?q=80&w=400", cost: "$15", description: "Produces oxygen at night, improving indoor air quality." },
        { name: "Spider Plant", image: "https://images.unsplash.com/photo-1572688484438-3430147a44f5?q=80&w=400", cost: "$12", description: "Resilient plant that filters indoor toxins effectively." },
        { name: "Peace Lily", image: "https://images.unsplash.com/photo-1593482892290-f596d6e77e2d?q=80&w=400", cost: "$18", description: "Known for beautiful white blooms and cleaning pollutants." },
        { name: "Boston Fern", image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=400", cost: "$14", description: "Adds lush green texture while humidifying indoor air." },
        { name: "Rubber Plant", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=400", cost: "$20", description: "Features glossy dark leaves that absorb airborne chemicals." },
        { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=400", cost: "$10", description: "Succulent with medicinal healing gel and air-cleansing traits." }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { name: "Lavender", image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=400", cost: "$22", description: "Calming purple flowers with a soothing relaxing scent." },
        { name: "Jasmine", image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=400", cost: "$25", description: "Sweet smelling flowers that bloom brightly indoors." },
        { name: "Rosemary", image: "https://images.unsplash.com/photo-1557844357-76f21679043f?q=80&w=400", cost: "$14", description: "Aromatic herb with pine-like needle foliage." },
        { name: "Mint", image: "https://images.unsplash.com/photo-1628556270448-4d4e9c0f29c1?q=80&w=400", cost: "$8", description: "Vigorous grower with a crisp, refreshing fragrance." },
        { name: "Eucalyptus", image: "https://images.unsplash.com/photo-1515585093767-604473f8d39f?q=80&w=400", cost: "$28", description: "Distinct silver-blue leaves with a refreshing aroma." },
        { name: "Geranium", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=400", cost: "$16", description: "Charming blossoms that release a pleasant citrus scent." }
      ]
    },
    {
      category: "Low Maintenance Succulents",
      plants: [
        { name: "Jade Plant", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=400", cost: "$11", description: "Symbol of good luck with thick glossy green leaves." },
        { name: "Echeveria", image: "https://images.unsplash.com/photo-1509587584298-0f3b3e3f1797?q=80&w=400", cost: "$9", description: "Rosette-forming succulent requiring minimal watering." },
        { name: "Zebra Plant", image: "https://images.unsplash.com/photo-1520302455890-a5d6205797f7?q=80&w=400", cost: "$13", description: "Striking white stripes on dark green compact leaves." },
        { name: "Panda Plant", image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=400", cost: "$10", description: "Fuzzy velvety leaves with brown-tipped edges." },
        { name: "Hens and Chicks", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=400", cost: "$12", description: "Hardy cluster-forming miniature succulent variety." },
        { name: "Burro's Tail", image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=400", cost: "$15", description: "Trailing stems draped in plump blue-green leaves." }
      ]
    }
  ];

  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(prevState => ({ ...prevState, [plant.name]: true }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  if (showCart) {
    return <CartItem onContinueShopping={() => setShowCart(false)} />;
  }

  return (
    <div className="product-list-container">
      <nav className="navbar">
        <div className="navbar-logo">Paradise Nursery</div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#plants">Plants</a>
          <a href="#cart" onClick={handleCartClick} className="cart-icon-link">
            🛒 Cart <span className="cart-badge">{totalCartCount}</span>
          </a>
        </div>
      </nav>

      <div className="catalog-content">
        <h2>Our Houseplant Collection</h2>
        {plantsArray.map((category, index) => (
          <div key={index} className="category-section">
            <h3>{category.category}</h3>
            <div className="plant-grid">
              {category.plants.map((plant, pIndex) => (
                <div key={pIndex} className="plant-card">
                  <img src={plant.image} alt={plant.name} className="plant-image" />
                  <h4>{plant.name}</h4>
                  <p className="plant-price">{plant.cost}</p>
                  <p className="plant-desc">{plant.description}</p>
                  <button
                    className={`add-to-cart-btn ${addedToCart[plant.name] ? 'added' : ''}`}
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedToCart[plant.name]}
                  >
                    {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
