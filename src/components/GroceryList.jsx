import React from 'react';
import GroceryItem from './GroceryItem';
import { toast } from 'react-toastify';

const GroceryList = ({ items, setItems, selectedCategory }) => {
  const filterItems = () =>
    selectedCategory
      ? items.filter((item) => item.category === selectedCategory)
      : items;

  const handleRemoveItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    toast.success('Item removed from list!');
  };

  const toggleChecked = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
    toast.success('Item status updated!');
  };

  return (
    <div>
      {filterItems().map((item) => (
        <GroceryItem
          key={item.id}
          item={item}
          toggleChecked={toggleChecked}
          handleRemoveItem={handleRemoveItem}
        />
      ))}
    </div>
  );
};

export default GroceryList;
