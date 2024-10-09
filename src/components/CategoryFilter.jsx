import React from 'react';

const CategoryFilter = ({ categories, setSelectedCategory }) => {
  return (
    <div className="mb-4">
      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border p-2 w-full"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
