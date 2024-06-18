import React from 'react';

const DishCard = ({ image, name }) => {
  return (
    <div className="bg-white shadow-md rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
    </div>
  );
};

export default DishCard;
