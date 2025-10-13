export const cartStorage = {
  getCart: () => {
    if (typeof window !== "undefined") {
      const cart = localStorage.getItem("ecommerce_cart");
      return cart ? JSON.parse(cart) : [];
    }
    return [];
  },

  saveCart: (cart) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("ecommerce_cart", JSON.stringify(cart));
    }
  },

  addToCart: (product, quantity = 1) => {
    const cart = cartStorage.getCart();
    const existingItem = cart.find((item) => item.id === product.id);

    // Ensure valid numbers
    const disprice = Number(product.disprice) || 0;
    const realprise = Number(product.realprise) || 0;

    if (existingItem) {
      existingItem.quantity = Number(existingItem.quantity || 0) + quantity;
    } else {
      cart.push({ ...product, disprice, realprise, quantity: Number(quantity) || 1 });
    }

    cartStorage.saveCart(cart);
    return cart;
  },

  removeFromCart: (productId) => {
    const cart = cartStorage.getCart();
    const updatedCart = cart.filter((item) => item.id !== productId);
    cartStorage.saveCart(updatedCart);
    return updatedCart;
  },

  updateQuantity: (productId, quantity) => {
    const cart = cartStorage.getCart();
    const item = cart.find((item) => item.id === productId);

    if (item) {
      item.quantity = Number(quantity) || 1; // ✅ ensure always a number
      item.disprice = Number(item.disprice) || 0;
      item.realprise = Number(item.realprise) || 0;
      cartStorage.saveCart(cart);
    }

    return cart;
  },

  clearCart: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("ecommerce_cart");
    }
  },

  getCartTotal: () => {
    const cart = cartStorage.getCart();
    return cart.reduce((total, item) => {
      const price = Number(item.disprice) || 0;
      const qty = Number(item.quantity) || 0;
      return total + price * qty;
    }, 0);
  },

  getCartTotalPrise: () => {
    const cart = cartStorage.getCart();
    return cart.reduce((total, item) => {
      const price = Number(item.realprise) || 0;
      const qty = Number(item.quantity) || 0;
      return total + price * qty;
    }, 0);
  },

  getCartCount: () => {
    const cart = cartStorage.getCart();
    return cart.reduce((count, item) => count + (Number(item.quantity) || 0), 0);
  },
};
