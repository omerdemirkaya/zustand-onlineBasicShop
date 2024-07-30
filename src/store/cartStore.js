import create from 'zustand';

const useCartStore = create((set) => ({
  cart: [], // Initialize as an empty array
  addToCart: (item) => set((state) => {
    // Find the index of the item in the cart
    const itemIndex = state.cart.findIndex(cartItem => cartItem.id === item.id);
    let newCart;

    if (itemIndex >= 0) {
      // Item already in the cart, update the quantity
      newCart = state.cart.map((cartItem, index) =>
        index === itemIndex
          ? { ...cartItem, quantity: cartItem.quantity ? cartItem.quantity + 1 : 2 }
          : cartItem
      );
    } else {
      // Item not in the cart, add it with quantity 1
      newCart = [...state.cart, { ...item, quantity: 1 }];
    }

    return { cart: newCart };
  }),
  removeFromCart: (itemId) => set((state) => {
    // Remove item by id
    return { cart: state.cart.filter(item => item.id !== itemId) };
  }),
  updateQuantity: (itemId, quantity) => set((state) => {
    // Update item quantity
    return {
      cart: state.cart.map((item) =>
        item.id === itemId
          ? { ...item, quantity }
          : item
      ),
    };
  }),
}));

export default useCartStore;
