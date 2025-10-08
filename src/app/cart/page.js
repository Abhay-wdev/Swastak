'use client';
import { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import CheckoutButton from '../components/CheckoutButton';
import { cartStorage } from '@/lib/localStorage';
import Link from 'next/link';

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPrise, setTotalPrise] = useState(0);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const cartData = cartStorage.getCart();
    setCart(cartData);
    setTotal(cartStorage.getCartTotal());
    setTotalPrise(cartStorage.getCartTotalPrise());
  };

  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    cartStorage.updateQuantity(productId, quantity);
    loadCart();
  };

  const handleRemove = (productId) => {
    cartStorage.removeFromCart(productId);
    loadCart();
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Add some products to get started!</p>
        <Link
          href="/products"
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition inline-block"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={handleUpdateQuantity}
              onRemove={handleRemove}
            />
          ))}
        </div>
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg sticky top-4">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between text-xl text-green-600 font-bold">
                <span>You have saved:</span>
                <span>₹{totalPrise-total} </span>
              </div>
            </div>
            <CheckoutButton cart={cart} total={total} onSuccess={loadCart} />
          </div>
        </div>
      </div>
    </div>
  );
}