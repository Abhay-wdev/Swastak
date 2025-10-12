'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { cartStorage } from '@/lib/localStorage';
import { toast } from 'react-hot-toast';

export default function CheckoutButton({ cart, total, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    paymentMethod: 'COD',
    note: ''
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url =
      'https://script.google.com/macros/s/AKfycbxoU9Cm45fzpCWVMl_ombXLzwTAZCTAgv-jHC7Nq5cc1TCFgH6YNbE_a0TYeC61IRHC/exec';

    const formData = new URLSearchParams({
      ...customerInfo,
      cart: JSON.stringify(cart),
      total: total.toString()
    });

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString()
      });

      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error('Invalid response format');
      }

      if (data.success) {
        toast.success(data.message || '✅ Order placed successfully!');
        cartStorage.clearCart();
        setCustomerInfo({
          name: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          pincode: '',
          country: '',
          paymentMethod: 'COD',
          note: ''
        });
        setShowForm(false);
        if (onSuccess) onSuccess();
        router.push('/notfound'); // Redirect
      } else {
        toast.error(data.message || '🚫 Error placing order');
      }
    } catch {
      toast.error('🚫 Something went wrong, please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!showForm) {
    return (
      <div className="space-y-4">
        <button
          onClick={() => setShowForm(true)}
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-bold"
        >
          Proceed to Checkout
        </button>

        <div className="text-center">
          Continue shopping{' '}
          <Link href="/products" className="underline text-orange-500 font-semibold">
            here
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto"
    >
      <h3 className="font-bold text-xl mb-3 text-gray-800">🧾 Checkout Information</h3>

      {/* Customer Info */}
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
        placeholder="Email Address"
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

      {/* Address Info */}
      <h4 className="font-semibold mt-4 text-gray-700">📍 Shipping Address</h4>
      <input
        type="text"
        placeholder="Street Address / House No."
        required
        value={customerInfo.address}
        onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <div className="grid grid-cols-2 gap-2">
        <input
          type="text"
          placeholder="City"
          required
          value={customerInfo.city}
          onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="State"
          required
          value={customerInfo.state}
          onChange={(e) => setCustomerInfo({ ...customerInfo, state: e.target.value })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <input
          type="text"
          placeholder="Postal Code"
          required
          value={customerInfo.pincode}
          onChange={(e) => setCustomerInfo({ ...customerInfo, pincode: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Country"
          required
          value={customerInfo.country}
          onChange={(e) => setCustomerInfo({ ...customerInfo, country: e.target.value })}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Payment Method */}
      <div className="mt-4">
        <label className="block font-semibold text-gray-700 mb-1">💳 Payment Method</label>
        <select
          value={customerInfo.paymentMethod}
          onChange={(e) => setCustomerInfo({ ...customerInfo, paymentMethod: e.target.value })}
          className="w-full p-2 border rounded"
        >
          <option value="COD">Cash on Delivery</option>
          <option value="UPI">UPI</option>
          <option value="Card">Credit/Debit Card</option>
          <option value="NetBanking">Net Banking</option>
        </select>
      </div>

      {/* Order Summary */}
      <div className="border-t pt-3 mt-4 text-sm text-gray-700">
        <p>
          <strong>🕓 Order Time:</strong> {new Date().toLocaleString()}
        </p>
        <p>
          <strong>🛒 Total Amount:</strong> ₹{total}
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-4 space-y-2">
        <button
          type="submit"
          disabled={loading || cart.length === 0}
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-bold disabled:bg-gray-400"
        >
          {loading ? 'Processing Order...' : '✅ Place Order'}
        </button>
        <button
          type="button"
          onClick={() => setShowForm(false)}
          className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition font-semibold"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
