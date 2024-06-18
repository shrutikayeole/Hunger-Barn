// ExplorePage.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from './Navbar';
import CategoryCard from './CategoryCard';
import DishCard from './DishCard';
import { categories, dishes } from './data';

const ExplorePage = () => {

  return (
    <div className="explore-page">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Explore Various Categories</h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Categories</h3>
          <div className="flex overflow-x-auto space-x-4">
            {categories.map((category, index) => (
              <CategoryCard key={index} image={category.image} name={category.name} />
            ))}
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4">Explore Delicious Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dishes.map((dish) => (
            <Link key={dish.id} to={`/dish/${dish.id}`}>
              <DishCard
                image={dish.image}
                dishName={dish.dishName}
                restaurantName={dish.restaurantName}
                posterName={dish.posterName}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
