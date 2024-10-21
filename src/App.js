import React, { useState } from 'react';
import AddItemForm from './components/AddItemForm';
import GroceryList from './components/GroceryList';
import CategoryFilter from './components/CategoryFilter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = ['Fruits', 'Vegetables', 'Dairy', 'Snacks'];

  const addItem = (newItem) => {
    setItems((prevItems) => [...prevItems, { ...newItem, id: Date.now() }]);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-5 py-10">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      
      <div className="p-6 max-w-lg w-full bg-white bg-opacity-80 rounded-xl shadow-xl">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-900">
          Grocery List Manager
        </h1>
        <AddItemForm addItem={addItem} />
        <CategoryFilter categories={categories} setSelectedCategory={setSelectedCategory} />
        <GroceryList items={items} setItems={setItems} selectedCategory={selectedCategory} />
      </div>

      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default App;
