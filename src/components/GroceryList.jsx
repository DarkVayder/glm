// src/components/GroceryList.js
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, deleteDoc, doc, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { toast } from 'react-toastify';
import GroceryItem from './GroceryItem';

const GroceryList = ({ selectedCategory }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsRef = collection(db, 'groceryItems');

    const q = selectedCategory
      ? query(itemsRef, where('category', '==', selectedCategory))
      : itemsRef;

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return unsubscribe;
  }, [selectedCategory]);

  const handleRemoveItem = async (id) => {
    try {
      await deleteDoc(doc(db, 'groceryItems', id));
      toast.success('Item removed from list!');
    } catch (error) {
      toast.error('Failed to remove item.');
    }
  };

  return (
    <div>
      {items.map((item) => (
        <GroceryItem key={item.id} item={item} handleRemoveItem={handleRemoveItem} />
      ))}
    </div>
  );
};

export default GroceryList;
