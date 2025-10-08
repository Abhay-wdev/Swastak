import Link from "next/link";
import { useState, useEffect } from "react";
import { cartStorage } from "@/lib/localStorage";

export default function ProductCard({ product }) {
  const firstImage = product.imageUrls.split(",")[0];
  const [quantity, setQuantity] = useState(0);

  // Initialize quantity from cart
  useEffect(() => {
    const cart = cartStorage.getCart();
    const item = cart.find((i) => i.id === product.id);
    if (item) setQuantity(item.quantity);
  }, [product.id]);

  const updateCart = (newQuantity) => {
    if (newQuantity === 0) {
      cartStorage.removeFromCart(product.id);
      setQuantity(0);
    } else {
      cartStorage.updateQuantity(product.id, newQuantity);
      setQuantity(newQuantity);
    }
    // Notify header about cart change
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleAddToCart = () => {
    const updatedCart = cartStorage.addToCart(product, 1);
    setQuantity(updatedCart.find((i) => i.id === product.id)?.quantity || 0);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden">
      <Link href={`/products/${product.name}`}>
        <div className="w-full h-64 flex items-center justify-center overflow-hidden bg-gray-100">
          <img
            src={firstImage}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.shortdisc}</p>

        {quantity === 0 ? (
          <button
            onClick={handleAddToCart}
            className="w-full mt-auto bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center justify-between mt-auto border rounded-lg p-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateCart(quantity - 1)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
              >
                -
              </button>
              <span className="font-medium">{quantity}</span>
              <button
                onClick={() =>
                  updateCart(Math.min(quantity + 1, product.stockQuantity))
                }
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
              >
                +
              </button>
            </div>
            <span className="font-bold text-gray-700">
              ₹{product.disprice * quantity}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
