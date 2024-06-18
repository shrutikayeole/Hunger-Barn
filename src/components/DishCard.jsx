import React from 'react';

const DishCard = ({ image, dishName, restaurantName, posterName }) => {
  return (
    <div className="max-w-full rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
      <img src={image} alt={dishName} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{dishName}</div>
        <p className="text-gray-700 mb-2">Restaurant: {restaurantName}</p>
        <p className="text-gray-700">Posted by: {posterName}</p>
      </div>
    </div>
  );
};

export default DishCard;
