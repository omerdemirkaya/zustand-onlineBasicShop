import { useState } from 'react';
import data from "../data.json";
import useCartStore from '../store/cartStore'; // Import the Zustand store

const Items = () => {
  const [infoVisible, setInfoVisible] = useState(false);
  const { addToCart } = useCartStore(); // Destructure the addToCart function from the store

  const handleAddToCart = (item) => {
    addToCart(item); // Call addToCart with the item
    setInfoVisible(true); // Show the info element
    setTimeout(() => setInfoVisible(false), 2000); // Hide the info element after 2 seconds
  };

  return (
    <div className="item-content">
      {data.length > 0 &&
        data.map((item) => (
          <div className="item-card-container" key={item.id}>
            <div className="item-card">
              <img src={item.src} alt={item.name} />
              <strong>{item.name}</strong> by 
              <strong>{item.brand}</strong>
              <strong>{item.price}</strong>
              <div className="add-to-card">
                <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      <div className={`info ${infoVisible ? 'show' : 'hide'}`}>
        Ürün sepete eklendi
      </div>
    </div>
  );
};

export default Items;
