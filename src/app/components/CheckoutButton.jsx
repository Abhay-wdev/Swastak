'use client';
import { useState } from 'react';
import { cartStorage } from '@/lib/localStorage';

export default function CheckoutButton({ cart, total, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url = "https://script.google.com/macros/s/AKfycbygeZblXf9p6uUXmrJUVp-sZi6-iuSy-dtTHfd0jzbDyInPjbSOlSLHeSbXJpnaKefg/exec";

    // Build URL encoded data
    const formData = new URLSearchParams({
      Name: customerInfo.name,
      Email: customerInfo.email,
      Phone: customerInfo.phone,
      Cart: JSON.stringify(cart),
      Total: total.toString()
    });

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString()
      });

      const data = await res.text();
      alert(data);

      // Clear cart and reset form
      cartStorage.clear();
      setCustomerInfo({ name: '', email: '', phone: '' });
      setShowForm(false);

      if (onSuccess) onSuccess();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!showForm) {
    return (
      <button
        onClick={() => setShowForm(true)}
        className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-bold"
      >
        Proceed to Checkout
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="font-bold text-lg mb-2">Customer Information</h3>
      <input
        type="text"
        placeholder="Full Name"
        required
        value={customerInfo.name}
        onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Email"
        required
        value={customerInfo.email}
        onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        required
        value={customerInfo.phone}
        onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-bold disabled:bg-gray-400"
      >
        {loading ? 'Processing...' : 'Place Order'}
      </button>
      <button
        type="button"
        onClick={() => setShowForm(false)}
        className="w-full bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition"
      >
        Cancel
      </button>
    </form>
  );
}
