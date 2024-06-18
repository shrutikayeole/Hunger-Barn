// DishDetailsPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const DishDetailsPage = ({ dishes }) => {
  const { dishId } = useParams();
  const dish = dishes.find((dish) => dish.id === dishId);

  if (!dish) {
    return <div className="container mx-auto px-4 py-8">Dish not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start">
          {/* Left Section - Dish Image */}
          <div className="md:w-1/2 w-full md:max-w-md">
            <div className="relative w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img src={dish.image} alt={dish.dishName} className="object-cover w-full h-full" />
            </div>
          </div>

          {/* Right Section - Dish Info */}
          <div className="md:w-1/2 w-full mt-4 md:mt-0 md:ml-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{dish.dishName}</h2>
            <p className="text-lg font-medium mb-2">{dish.restaurantName}</p>
            <p className="text-lg font-medium mb-2">Posted by {dish.posterName}</p>
            <div className="flex space-x-4 mb-4">
              <a href={dish.zomatoLink} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700">Zomato</a>
              <a href={dish.swiggyLink} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700">Swiggy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishDetailsPage;