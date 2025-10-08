export const cartStorage = {
  getCart: () => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('ecommerce_cart');
      return cart ? JSON.parse(cart) : [];
    }
    return [];
  },

  saveCart: (cart) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ecommerce_cart', JSON.stringify(cart));
    }
  },

  addToCart: (product, quantity = 1) => {
    const cart = cartStorage.getCart();
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    cartStorage.saveCart(cart);
    return cart;
  },

  removeFromCart: (productId) => {
    const cart = cartStorage.getCart();
    const updatedCart = cart.filter(item => item.id !== productId);
    cartStorage.saveCart(updatedCart);
    return updatedCart;
  },

  updateQuantity: (productId, quantity) => {
    const cart = cartStorage.getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
      item.quantity = quantity;
      cartStorage.saveCart(cart);
    }
    
    return cart;
  },

  clearCart: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('ecommerce_cart');
    }
  },

  getCartTotal: () => {
    const cart = cartStorage.getCart();
    return cart.reduce((total, item) => total + (item.disprice * item.quantity), 0);
  },

   getCartTotalPrise: () => {
    const cart = cartStorage.getCart();
    return cart.reduce((total, item) => total + (item.realprise * item.quantity), 0);
  },

  getCartCount: () => {
    const cart = cartStorage.getCart();
    return cart.reduce((count, item) => count + item.quantity, 0);
  }
};
