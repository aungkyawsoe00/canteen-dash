import React, { useState, useEffect } from 'react';
import { mockDishes, CartManager } from '../mockData';
import '../index.css';

const MenuPage = () => {
  const [stallName, setStallName] = useState("Nong's Thai Stall");
  const [toast, setToast] = useState(null);

  useEffect(() => {
    // Get stall name from localStorage
    const savedStallName = localStorage.getItem('selectedStallName');
    if (savedStallName) {
      setStallName(savedStallName);
    }
  }, []);

  const handleAddToCart = (dish) => {
    CartManager.addItem(dish);
    setToast(`${dish.name} added to cart!`);
    setTimeout(() => setToast(null), 2000);
  };

  const handleBackClick = () => {
    window.location.href = 'home.html';
  };

  return (
    <div>
      {/* Menu Header */}
      <div className="menu-header">
        <button className="back-button" onClick={handleBackClick}>
          ←
        </button>
        <h2>{stallName}</h2>
      </div>

      {/* Dishes Container */}
      <div className="container">
        <h3 style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>
          Menu Items
        </h3>
        <div className="dishes-container">
          {mockDishes.map((dish) => (
            <div key={dish.id} className="dish-card">
              <img
                src={dish.imageUrl}
                alt={dish.name}
                className="dish-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/80?text=No+Image';
                }}
              />
              <div className="dish-content">
                <div>
                  <div className="dish-name">{dish.name}</div>
                  <div className="dish-description">{dish.description}</div>
                </div>
                <div className="dish-footer">
                  <div className="dish-price">฿{dish.price.toFixed(2)}</div>
                  <button
                    className="btn-add-cart"
                    onClick={() => handleAddToCart(dish)}
                    title="Add to cart"
                  >
                    ➕
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ height: '32px' }}></div>
      </div>

      {/* Toast Notification */}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
};

export default MenuPage;
