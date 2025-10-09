import Link from "next/link";
import { useState, useEffect } from "react";
import { cartStorage } from "@/lib/localStorage";

export default function ProductCard({ product }) {
  const firstImage = product.imageUrls.split(",")[0];
  const [quantity, setQuantity] = useState(0);
  const discount = Math.round(((product.realprise - product.disprice) / product.realprise) * 100);

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
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleAddToCart = () => {
    const updatedCart = cartStorage.addToCart(product, 1);
    setQuantity(updatedCart.find((i) => i.id === product.id)?.quantity || 0);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden border border-gray-100 group">
      <Link href={`/products/${product.name}`}>
        <div className="relative w-full h-72 flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50">
          {/* Discount Badge */}
          {discount > 0 && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10 shadow-md">
              {discount}% OFF
            </div>
          )}
          
          {/* Category Badge */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-orange-600 px-3 py-1 rounded-full text-xs font-semibold z-10 shadow-sm border border-orange-200">
            {product.category.toUpperCase()}
          </div>

          {/* Product Image */}
          <img
            src={firstImage}
            alt={product.name}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-1">
        {/* Product Name */}
        <Link href={`/products/${product.name}`}>
          <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-orange-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        {/* Weight Badge */}
        <div className="inline-flex items-center gap-1 mb-3 w-fit">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
          <span className="text-sm font-medium text-gray-600">{product.weight}</span>
        </div>

        {/* Short Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
          {product.shortdisc}
        </p>

        {/* Price Section */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">₹{product.disprice}</span>
            {product.realprise > product.disprice && (
              <span className="text-sm text-gray-500 line-through">₹{product.realprise}</span>
            )}
          </div>
          {product.stockQuantity < 50 && product.stockQuantity > 0 && (
            <p className="text-xs text-orange-600 mt-1 font-medium">
              Only {product.stockQuantity} left in stock!
            </p>
          )}
          {product.stockQuantity === 0 && (
            <p className="text-xs text-red-600 mt-1 font-medium">Out of Stock</p>
          )}
        </div>

        {/* Add to Cart / Quantity Controls */}
        {quantity === 0 ? (
          <button
            onClick={handleAddToCart}
            disabled={product.stockQuantity === 0}
            className={`w-full mt-auto py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
              product.stockQuantity === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-md hover:shadow-lg"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {product.stockQuantity === 0 ? "Out of Stock" : "Add to Cart"}
          </button>
        ) : (
          <div className="mt-auto bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-3 border border-orange-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateCart(quantity - 1)}
                  className="w-8 h-8 flex items-center justify-center bg-white text-orange-600 rounded-lg hover:bg-orange-100 transition-colors shadow-sm border border-orange-200 font-bold"
                >
                  −
                </button>
                <span className="font-bold text-lg text-gray-800 min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() =>
                    updateCart(Math.min(quantity + 1, product.stockQuantity))
                  }
                  disabled={quantity >= product.stockQuantity}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors shadow-sm border font-bold ${
                    quantity >= product.stockQuantity
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed border-gray-300"
                      : "bg-white text-orange-600 hover:bg-orange-100 border-orange-200"
                  }`}
                >
                  +
                </button>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-600 mb-0.5">Total</div>
                <div className="font-bold text-lg text-gray-900">
                  ₹{product.disprice * quantity}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}