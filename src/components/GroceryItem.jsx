import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

const GroceryItem = ({ item, handleRemoveItem, toggleChecked }) => {
  return (
    <div 
      className={`p-4 mb-2 rounded-lg shadow-md flex justify-between items-center transition-all 
      ${item.checked ? 'bg-gray-200' : 'bg-white hover:shadow-lg hover:bg-blue-50'}`}
    >
      {/* Left: Item Details */}
      <div onClick={() => toggleChecked(item.id)} className="cursor-pointer">
        <p 
          className={`text-lg font-semibold transition-all 
            ${item.checked ? 'line-through text-gray-400' : 'text-gray-900'}`}
        >
          {item.name}
        </p>
        <p className="text-sm text-gray-500">{item.category}</p>
      </div>

      {/* Right: Trash Icon */}
      <button
        onClick={() => handleRemoveItem(item.id)}
        aria-label={`Remove ${item.name}`}
        className="text-red-500 hover:text-red-600 transition-transform transform hover:scale-110"
      >
        <FiTrash2 size={24} />
      </button>
    </div>
  );
};

export default GroceryItem;
