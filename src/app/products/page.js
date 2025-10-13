'use client';
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { products as defaultProducts } from '@/lib/productsData';
import { cartStorage } from '@/lib/localStorage';
import toast from 'react-hot-toast';
import { Search } from 'lucide-react';
import WhyChooseSuswastik from '../components/WhyChooseSuswastik';

// Skeleton loader
const SkeletonCard = () => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse flex flex-col">
    <div className="w-full h-64 bg-gray-300"></div>
    <div className="p-4 flex flex-col flex-1 space-y-3">
      <div className="h-6 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded w-full"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      <div className="flex justify-between items-center mt-auto">
        <div className="h-8 bg-gray-300 rounded w-24"></div>
        <div className="h-4 bg-gray-300 rounded w-16"></div>
      </div>
      <div className="h-10 bg-gray-300 rounded w-full"></div>
    </div>
  </div>
);

export default function ProductsPage() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState('all');

  // Weight options
  const weightOptions = [
    'all',
    '50g-100g',
    '100g-200g',
    '200g-300g',
    '300g-400g',
    '500g-500g',
    '1kg',
    '2kg',
    '5kg',
  ];

  // Load products
  const fetchProducts = async () => {
    setLoading(true);
    let storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      storedProducts = JSON.parse(storedProducts);
    } else {
      storedProducts = defaultProducts;
      localStorage.setItem('products', JSON.stringify(defaultProducts));
    }
    setProducts(storedProducts);
    setLoading(false);
  };

  useEffect(() => {
    setCart(cartStorage.getCart());
    fetchProducts();

    // Listen for cart changes in other tabs
    const handleStorageChange = () => {
      setCart(cartStorage.getCart());
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Apply filters
  useEffect(() => {
    if (!products || products.length === 0) return;

    let tempProducts = products.filter((p) => p.isActive);

    // Category filter
    if (selectedCategory !== 'all') {
      tempProducts = tempProducts.filter(
        (p) =>
          (p.category || '').trim().toLowerCase() ===
          selectedCategory.toLowerCase()
      );
    }

    // Search filter
    if (searchKeyword.trim()) {
      const keyword = searchKeyword.toLowerCase();
      tempProducts = tempProducts.filter(
        (p) =>
          (p.name || '').toLowerCase().includes(keyword) ||
          (p.shortdisc || '').toLowerCase().includes(keyword) ||
          (p.description || '').toLowerCase().includes(keyword)
      );
    }

    // In-stock filter
    if (inStockOnly) {
      tempProducts = tempProducts.filter(
        (p) => Number(p.stockQuantity) > 0
      );
    }

    // Weight filter
    if (selectedWeight !== 'all') {
      tempProducts = tempProducts.filter((p) => {
        if (!p.weight) return false;
        const weightStr = p.weight.toLowerCase().replace(/\s+/g, '');
        const [min, max] =
          selectedWeight.includes('-')
            ? selectedWeight.replace('g', '').split('-').map(Number)
            : [parseFloat(selectedWeight), parseFloat(selectedWeight)];

        if (weightStr.includes('kg')) {
          const kgVal = parseFloat(weightStr.replace('kg', '')) * 1000;
          return kgVal >= min && (max ? kgVal <= max : true);
        } else if (weightStr.includes('g')) {
          const gVal = parseFloat(weightStr.replace('g', ''));
          return gVal >= min && (max ? gVal <= max : true);
        }
        return false;
      });
    }

    setFilteredProducts(tempProducts);
  }, [selectedCategory, searchKeyword, inStockOnly, selectedWeight, products]);

  const handleAddToCart = (product) => {
    const updatedCart = cartStorage.addToCart(product, 1);
    setCart(updatedCart);
    toast.success(`${product.name} added to cart!`);
  };

  // Real-time cart quantity update (for same product add)
  useEffect(() => {
    const updatedCart = cartStorage.getCart();
    setCart(updatedCart);
  }, [cartStorage.getCartCount()]); // trigger on quantity change

  // Extract unique categories
  const categories = [
    'all',
    ...Array.from(
      new Set(
        products.map((p) => (p.category || '').trim()).filter(Boolean)
      )
    ),
  ];

  return (
    <div>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Our Products
        </h1>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4 flex-wrap">
          {/* Category buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-lg font-semibold transition-all duration-200 border ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white border-orange-500 shadow-lg'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-orange-400 hover:text-white'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Search input */}
          <div className="relative w-full md:w-64">
            <Search
              className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search products..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Weight filter */}
          <div className="flex flex-wrap gap-2">
            {weightOptions.map((weight) => (
              <button
                key={weight}
                onClick={() => setSelectedWeight(weight)}
                className={`px-3 py-1 rounded-lg font-medium transition-all duration-200 border ${
                  selectedWeight === weight
                    ? 'bg-orange-500 text-white border-orange-500 shadow-lg'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-orange-400 hover:text-white'
                }`}
              >
                {weight}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10 text-lg">
            No products found.
          </p>
        )}
      </div>

      {/* Why Choose Section */}
      <WhyChooseSuswastik />
    </div>
  );
}
