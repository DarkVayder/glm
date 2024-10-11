import React from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { toast } from 'react-toastify';

const GroceryItem = ({ item, handleRemoveItem }) => {
  const toggleChecked = async () => {
    try {
      const itemRef = doc(db, 'groceryItems', item.id);
      await updateDoc(itemRef, {
        checked: !item.checked,
      });
      toast.success('Item status updated!');
    } catch (error) {
      toast.error('Failed to update item.');
    }
  };

  return (
    <div className="border p-4 mb-2 flex justify-between items-center">
      <div>
        <p className={`font-bold ${item.checked ? 'line-through text-gray-500' : ''}`}>
          {item.name}
        </p>
        <p className="text-gray-500">{item.category}</p>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={item.checked || false}
          onChange={toggleChecked}
          className="mr-2"
        />
        <button
          className="bg-red-500 text-white p-2"
          onClick={() => handleRemoveItem(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default GroceryItem;
