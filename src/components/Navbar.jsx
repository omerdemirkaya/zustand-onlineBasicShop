import { useState } from "react";
import "../style.scss";
import logo from "../assets/shop.jpg";
import basket from "../assets/shopping-basket.png";
import useCartStore from "../store/cartStore"; // Import the Zustand store
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { cart } = useCartStore();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const getUniqueItems = () => {
    const itemMap = new Map();
    cart.forEach((item) => {
      if (itemMap.has(item.id)) {
        itemMap.get(item.id).quantity += 1;
      } else {
        itemMap.set(item.id, { ...item, quantity: 1 });
      }
    });
    return Array.from(itemMap.values());
  };
  const navigateToSiparisler = () => {
    navigate("/siparisler");
  };

  const uniqueItems = getUniqueItems();

  return (
    <div className="div-container">
      <div className="logo">
        <img src={logo} alt="Logo" onClick={() => navigate("/")} />
      </div>

      <div className="items">
        <ul>
          <li>Siparişlerim</li>
          <li
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
            onClick={navigateToSiparisler}
          >
            <img src={basket} alt="Basket" />
            Sepetim {cart.length > 0 && <span>({cart.length})</span>}
            {isDropdownVisible && (
              <div className="dropdown">
                {uniqueItems.length > 0
                  ? uniqueItems.map((item) => (
                      <div className="dropdown-item" key={item.id}>
                        <img
                          src={item.src}
                          alt={item.name}
                          className="dropdown-item-img"
                        />
                        <div className="dropdown-item-info">
                          <strong>{item.name}</strong>
                          {item.quantity > 1 && (
                            <span className="item-quantity">
                              x{item.quantity}
                            </span>
                          )}
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
