'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { cartStorage } from '@/lib/localStorage';
import { products as defaultProducts } from '@/lib/productsData';
import toast from 'react-hot-toast';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    if (!slug) return;

    const storedProducts = localStorage.getItem('products');
    const allProducts = storedProducts ? JSON.parse(storedProducts) : defaultProducts;

    const formattedSlug = decodeURIComponent(slug).toLowerCase().replace(/-/g, ' ');
    const foundProduct = allProducts.find((p) => p.name.toLowerCase() === formattedSlug);

    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImageIndex(0);

      const cart = cartStorage.getCart();
      const existingItem = cart.find((item) => item.id === foundProduct.id);
      setQuantity(existingItem ? existingItem.quantity : 1);
    } else {
      setProduct(null);
    }
  }, [slug]);

  useEffect(() => {
    const handleCartUpdated = () => {
      if (!product) return;
      const cart = cartStorage.getCart();
      const existingItem = cart.find((item) => item.id === product.id);
      setQuantity(existingItem ? existingItem.quantity : 1);
    };
    window.addEventListener('cartUpdated', handleCartUpdated);
    return () => window.removeEventListener('cartUpdated', handleCartUpdated);
  }, [product]);

  const updateCartQuantity = (newQuantity) => {
    if (!product) return;

    if (newQuantity <= 0) {
      cartStorage.removeFromCart(product.id);
      setQuantity(0);
    } else {
      const cart = cartStorage.getCart();
      const existingItem = cart.find((item) => item.id === product.id);
      if (existingItem) {
        cartStorage.updateQuantity(product.id, newQuantity);
      } else {
        cartStorage.addToCart(product, newQuantity);
      }
      setQuantity(newQuantity);
    }
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleAddToCart = () => {
    updateCartQuantity(quantity);
    const inCart = cartStorage.getCart().find((i) => i.id === product.id);
    if (inCart) {
      toast.success(`${product.name} quantity updated to ${quantity}!`);
    } else {
      toast.success(`${product.name} added to cart!`);
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">Product not found 😔</h2>
      </div>
    );
  }

  const images = product.imageUrls ? product.imageUrls.split(',').filter((img) => img && img.trim() !== '') : [];
  const highlights = product.points4 ? product.points4.split(',').filter((p) => p && p.trim() !== '') : [];

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6">
          <span>Home</span> / <span>{product.category}</span> / <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Main Product Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Image Gallery */}
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-100 border rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                <img
                  src={images[selectedImageIndex] || images[0]}
                  alt={product.name}
                  className="max-w-full max-h-full h-100 object-contain"
                />
              </div>
              {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`View ${i + 1}`}
                      onClick={() => setSelectedImageIndex(i)}
                      className={`w-20 h-20 object-cover rounded-lg border-2 cursor-pointer transition flex-shrink-0 ${
                        selectedImageIndex === i ? 'border-orange-500' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="lg:w-1/2 flex flex-col">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              {product.shortdisc && <p className="text-gray-600 mb-4">{product.shortdisc}</p>}

              {/* Price Section */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-3xl font-bold text-green-700">₹{product.disprice}</span>
                  <span className="text-xl line-through text-gray-500">₹{product.realprise}</span>
                  <span className="bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded">
                    {Math.round(((product.realprise - product.disprice) / product.realprise) * 100)}% OFF
                  </span>
                </div>
                <p className="text-sm text-gray-600">Inclusive of all taxes</p>
              </div>

              {/* Weight & Stock */}
              <div className="flex flex-wrap gap-4 mb-6">
                {product.weight && (
                  <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg min-w-[120px]">
                    <span className="text-sm text-gray-600">Weight:</span>
                    <span className="font-semibold text-gray-900">{product.weight}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg min-w-[120px]">
                  <span className="text-sm text-gray-600">Stock:</span>
                  <span className="font-semibold text-green-600">{product.stockQuantity} Available</span>
                </div>
              </div>

              {/* Highlights */}
              {highlights.length > 0 && highlights[0] !== '' && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Key Highlights</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2 rounded">
                    {highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 p-2 rounded bg-gray-50">
                        <span className="text-green-600 mt-1">✓</span>
                        <span className="text-gray-700">{point.trim()}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">Quantity</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => updateCartQuantity(quantity - 1)}
                    disabled={quantity <= 1}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg transition font-semibold ${
                      quantity <= 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => updateCartQuantity(quantity + 1)}
                    disabled={quantity >= product.stockQuantity}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg transition font-semibold ${
                      quantity >= product.stockQuantity ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    +
                  </button>
                </div>
                {quantity >= product.stockQuantity && (
                  <p className="text-sm text-red-600 mt-2">Maximum stock reached</p>
                )}
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 transition text-lg font-semibold shadow-md"
              >
                {cartStorage.getCart().find((item) => item.id === product.id) ? 'Update Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-wrap gap-4 mb-6 border-b border-gray-200">
            {['description', 'ingredients', 'benefits', 'faqs', 'shipping'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 font-semibold rounded ${
                  activeTab === tab ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="text-gray-700">
            {activeTab === 'description' && <p>{product.description || 'No description available.'}</p>}
            {activeTab === 'ingredients' && <p>{product.ingredients || 'No ingredients info available.'}</p>}
            {activeTab === 'benefits' && <p>{product.nutritionalBenefits || 'No benefits info available.'}</p>}
            {activeTab === 'faqs' && <p>{product.faqs || 'No FAQs available.'}</p>}
            {activeTab === 'shipping' && <p>{product.shippingReturns || 'No shipping info available.'}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
