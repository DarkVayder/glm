import React, { useState } from 'react';
import { useAuth } from './components/AuthProvider';
import AddItemForm from './components/AddItemForm';
import GroceryList from './components/GroceryList';
import Login from './components/Login';
import Signup from './components/Signup';
import CategoryFilter from './components/CategoryFilter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { currentUser } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = ['Fruits', 'Vegetables', 'Dairy', 'Snacks'];

  return (
    <>
      <div className="p-6 max-w-lg mx-auto">
        {currentUser ? (
          <>
            <h1 className="text-3xl font-bold mb-6 text-center">Grocery List Manager</h1>
            <AddItemForm />
            <CategoryFilter
              categories={categories}
              setSelectedCategory={setSelectedCategory}
            />
            <GroceryList selectedCategory={selectedCategory} />
          </>
        ) : (
          <div>
            <Login />
            <Signup />
          </div>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
};

export default App;
