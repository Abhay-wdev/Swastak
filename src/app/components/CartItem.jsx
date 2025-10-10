export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  const discount = ((item.realprise - item.disprice) / item.realprise * 100).toFixed(0);
  const totalPrice = item.disprice * item.quantity;
  const savings = (item.realprise - item.disprice) * item.quantity;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow w-full">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Product Image */}
        <div className="relative flex-shrink-0">
          <img
            src={item.imageUrls.split(',')[0]}
            alt={item.name}
            className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg"
          />
          {discount > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-1 truncate">{item.name}</h3>
            {item.weight && (
              <p className="text-sm text-gray-500 mb-1">{item.weight}</p>
            )}
            {item.category && (
              <span className="inline-block bg-orange-100 text-orange-600 text-xs font-medium px-2 py-1 rounded mb-1">
                {item.category}
              </span>
            )}
            {item.shortdisc && (
              <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                {item.shortdisc}
              </p>
            )}
          </div>

          {/* Price and Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-orange-500">₹{item.disprice}</span>
              {item.realprise > item.disprice && (
                <>
                  <span className="text-sm text-gray-400 line-through">₹{item.realprise}</span>
                  <span className="text-sm text-green-600 font-medium">
                    Save ₹{item.realprise - item.disprice}
                  </span>
                </>
              )}
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2 mt-2 sm:mt-0">
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
                className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-bold"
              >
                -
              </button>
              <span className="font-bold min-w-[2rem] text-center">{item.quantity}</span>
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                disabled={item.quantity >= item.stockQuantity}
                className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-bold"
              >
                +
              </button>
              {item.stockQuantity && item.quantity >= item.stockQuantity && (
                <span className="text-xs text-red-500 ml-2">Max stock reached</span>
              )}
            </div>

            {/* Remove Button */}
            <button
              onClick={() => onRemove(item.id)}
              className="text-red-500 hover:text-red-700 font-medium transition-colors flex items-center gap-1 mt-2 sm:mt-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Remove
            </button>
          </div>
        </div>

        {/* Total Price */}
        <div className="flex-shrink-0 mt-2 sm:mt-0 sm:ml-4 text-right">
          <p className="text-xl font-bold text-gray-800">₹{totalPrice}</p>
          {savings > 0 && (
            <p className="text-sm text-green-600 mt-1">You save ₹{savings}</p>
          )}
        </div>
      </div>
    </div>
  );
}
