import useCartStore from '../store/cartStore'; // Adjust path as needed
import Navbar from './Navbar';
import "../style.scss";

const Siparisler = () => {
  const { cart } = useCartStore(); // Get cart items from Zustand store

  const getUniqueItems = () => {
    // The cart now includes item quantities, so we can use it directly
    return cart;
  };

  const uniqueItems = getUniqueItems();

  return (
    <>
      <Navbar />
      <div className="siparisler-container">
        <h1>Siparişler</h1>
        {uniqueItems.length > 0 ? (
          <div className="siparisler-list-container">
            {uniqueItems.map((item) => (
              <div className="siparisler-item" key={item.id}>
                <img src={item.src} alt={item.name} className="siparisler-item-img" />
                <div className="siparisler-item-info">
                  <strong>{item.name}</strong>
                  <strong>{item.quantity > 1 && <span className="item-quantity">x{item.quantity}</span>}</strong>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Sepetiniz boş.</p>
        )}
      </div>
    </>
  );
};

export default Siparisler;
