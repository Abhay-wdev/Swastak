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
      
      // Check if product is already in cart and set initial quantity
      const cart = cartStorage.getCart();
      const existingItem = cart.find(item => item.id === foundProduct.id);
      if (existingItem) {
        setQuantity(existingItem.quantity);
      } else {
        setQuantity(1);
      }
    } else {
      setProduct(null);
    }
  }, [slug]);

  // Listen for cart updates from other components
  useEffect(() => {
    const handleCartUpdated = () => {
      if (!product) return;
      const cart = cartStorage.getCart();
      const existingItem = cart.find(item => item.id === product.id);
      if (existingItem) {
        setQuantity(existingItem.quantity);
      } else {
        setQuantity(1);
      }
    };

    window.addEventListener('cartUpdated', handleCartUpdated);
    return () => window.removeEventListener('cartUpdated', handleCartUpdated);
  }, [product]);

  const handleAddToCart = () => {
    if (!product) return;
    
    const cart = cartStorage.getCart();
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      // Update quantity of existing item
      cartStorage.updateQuantity(product.id, quantity);
      toast.success(`${product.name} quantity updated to ${quantity}!`);
    } else {
      // Add new item to cart
      cartStorage.addToCart(product, quantity);
      toast.success(`${product.name} added to cart!`);
    }
    
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const updateQuantity = (change) => {
    const newQuantity = Math.max(1, Math.min(quantity + change, product.stockQuantity));
    setQuantity(newQuantity);
    
    // Check if product is in cart
    const cart = cartStorage.getCart();
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      // Live update cart when product is already in cart
      cartStorage.updateQuantity(product.id, newQuantity);
      window.dispatchEvent(new Event('cartUpdated'));
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">Product not found 😔</h2>
      </div>
    );
  }

  const images = product.imageUrls ? product.imageUrls.split(',').filter(img => img && img.trim() !== '') : [];
  const highlights = product.points4 ? product.points4.split(',').filter(p => p && p.trim() !== '') : [];

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6">
          <span>Home</span> / <span>{product.category}</span> / <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Main Product Section */}
        <div className="bg-white  rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-8">
           {/* Image Gallery */}
<div className="w-full  lg:w-1/2">
  {/* Main Image */}
  <div className="bg-gray-100 border rounded-lg overflow-hidden mb-4 flex items-center justify-center" >
    <img
      src={images[selectedImageIndex] || images[0]}
      alt={product.name}
      className="max-w-full max-h-full object-contain"
    />
  </div>

  {/* Thumbnails */}
  {images.length > 1 && (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`View ${i + 1}`}
          onClick={() => setSelectedImageIndex(i)}
          className={`
            w-20 h-20 object-cover rounded-lg border-2 cursor-pointer transition flex-shrink-0
            ${selectedImageIndex === i ? 'border-orange-500' : 'border-gray-200 hover:border-gray-300'}
          `}
        />
      ))}
    </div>
  )}
</div>


            {/* Product Info */}
            <div className="lg:w-1/2">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              {product.shortdisc && (
                <p className="text-gray-600 mb-4">{product.shortdisc}</p>
              )}

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
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 border p-2 rounded">
    {highlights.map((point, i) => (
      <li
        key={i}
        className="flex items-start gap-2 border p-2 rounded bg-gray-50"
      >
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
                    onClick={() => updateQuantity(-1)}
                    disabled={quantity <= 1}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg transition font-semibold ${
                      quantity <= 1 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(1)}
                    disabled={quantity >= product.stockQuantity}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg transition font-semibold ${
                      quantity >= product.stockQuantity
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 hover:bg-gray-300'
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
                {cartStorage.getCart().find(item => item.id === product.id) ? 'Update Cart' : 'Add to Cart'}
              </button>

              {/* Category Badge */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex border-b border-gray-200 overflow-x-auto">
            {['description', 'ingredients', 'benefits', 'faqs', 'shipping'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-medium text-sm whitespace-nowrap transition ${
                  activeTab === tab
                    ? 'border-b-2 border-orange-500 text-orange-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab === 'description' && 'Description'}
                {tab === 'ingredients' && 'Ingredients'}
                {tab === 'benefits' && 'Nutritional Benefits'}
                {tab === 'faqs' && 'FAQs'}
                {tab === 'shipping' && 'Shipping & Returns'}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div className="prose max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {product.ingredients}
                </div>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div className="prose max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {product.nutritionalBenefits}
                </div>
              </div>
            )}

            {activeTab === 'faqs' && (
              <div className="prose max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {product.faqs}
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="prose max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {product['shipping&Returns']}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}