import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { toast } from 'react-toastify';

const AddItemForm = () => {
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('Fruits');

  const handleAddItem = async (e) => {
    e.preventDefault();
    if (!itemName || !category) {
      toast.error('Please fill all fields.');
      return;
    }

    try {
      await addDoc(collection(db, 'groceryItems'), {
        name: itemName,
        category,
        checked: false,
      });
      toast.success('Item added to list!');
      setItemName('');
      setCategory('Fruits');
    } catch (error) {
      toast.error('Failed to add item.');
    }
  };

  return (
    <form onSubmit={handleAddItem} className="mb-4">
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Item name"
        className="border p-2 w-full mb-2"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 w-full mb-2"
      >
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Dairy">Dairy</option>
        <option value="Snacks">Snacks</option>
      </select>
      <button type="submit" className="bg-green-500 text-white p-2 w-full">
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;
