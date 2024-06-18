// DishDetailsCard.jsx

import React from 'react';

const DishDetailsCard = ({ dish }) => {
  return (
    <div className="relative z-10 bg-white shadow-2xl rounded-lg overflow-hidden w-full max-w-2xl p-4 flex flex-col md:flex-row transform transition-transform duration-300 hover:scale-105">
      <div className="md:w-1/2 w-full h-64 md:h-auto">
        <img src={dish.image} alt={dish.dishName} className="w-full h-full object-cover" />
      </div>
      <div className="md:w-1/2 w-full p-4 flex flex-col justify-start">
        <h2 className="text-4xl font-bold mb-2">{dish.dishName}</h2>
        <p className="text-lg font-medium mb-2">{dish.restaurantName}</p>
        <p className="text-md font-medium mb-4">Posted by: {dish.posterName}</p>
        <div className="flex space-x-4">
          <a href={dish.zomatoLink} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700">Zomato</a>
          <a href={dish.swiggyLink} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700">Swiggy</a>
        </div>
      </div>
    </div>
  );
};

export default DishDetailsCard;
