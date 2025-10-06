export default function ProductCard({ product, onAddToCart }) {
  // Use the first image from imageUrls array
  const firstImage = product.imageUrls.split(',')[0];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
      <img
        src={firstImage}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 flex flex-col flex-1">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-orange-500">₹{product.price}</span>
            <span className="text-sm text-gray-500">Stock: {product.stockQuantity}</span>
          </div>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          disabled={product.stockQuantity === 0}
          className="w-full mt-auto bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {product.stockQuantity === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
