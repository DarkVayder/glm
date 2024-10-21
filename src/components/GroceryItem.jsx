import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

const GroceryItem = ({ item, handleRemoveItem, toggleChecked }) => {
  return (
    <div
      className={`p-4 mb-4 rounded-lg shadow-md flex items-center justify-between
        ${item.checked ? 'bg-gray-50 line-through text-gray-400' : 'bg-white'}
        hover:shadow-xl transition-all duration-300`}
    >
      {/* Left: Item Name and Category */}
      <div
        onClick={() => toggleChecked(item.id)}
        className="cursor-pointer space-y-1 w-3/4"
      >
        <p className="text-xl font-semibold">{item.name}</p>
        <p className="text-sm text-gray-500">{item.category}</p>
      </div>

      {/* Right: Trash Icon */}
      <button
        onClick={() => handleRemoveItem(item.id)}
        aria-label={`Remove ${item.name}`}
        className="text-red-500 hover:text-red-600 transition-transform transform hover:scale-125"
      >
        <FiTrash2 size={24} />
      </button>
    </div>
  );
};

export default GroceryItem;
