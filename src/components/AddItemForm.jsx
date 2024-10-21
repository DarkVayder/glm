import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddItemForm = ({ addItem }) => {
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('Fruits');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!itemName) {
      toast.error('Please enter an item name.');
      return;
    }
    addItem({ name: itemName, category, checked: false });
    setItemName('');
    setCategory('Fruits');
    toast.success('Item added successfully!');
  };

  return (
    <form onSubmit={handleAddItem} className="space-y-4">
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Enter item name"
        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Dairy">Dairy</option>
        <option value="Snacks">Snacks</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
      >
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;
