export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex gap-4">
      <img
        src={item.image_url}
        alt={item.name}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="text-lg font-bold mb-2">{item.name}</h3>
        <p className="text-orange-500 font-bold">₹{item.price}</p>
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
            >
              -
            </button>
            <span className="font-bold">{item.quantity}</span>
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>
          <button
            onClick={() => onRemove(item.id)}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold">₹{item.price * item.quantity}</p>
      </div>
    </div>
  );
}
