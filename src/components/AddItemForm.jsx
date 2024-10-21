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

    const newItem = { name: itemName, category, checked: false };
    addItem(newItem);
    setItemName('');
    setCategory('Fruits');
  };

  return (
    <form onSubmit={handleAddItem} className="mb-4">
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Item name"
        className="border p-3 w-full mb-3 text-lg md:text-xl rounded-lg"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-3 w-full mb-3 text-lg md:text-xl rounded-lg"
      >
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Dairy">Dairy</option>
        <option value="Snacks">Snacks</option>
      </select>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 w-full rounded-lg text-lg md:text-xl"
      >
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;
