import React from 'react';

const CategoryCard = ({ image, name }) => {
  return (
    <div
      className="category-card flex flex-col items-center cursor-pointer hover:bg-gray-200 transition duration-200 ease-in-out"
      style={{ flex: '0 0 150px' }} // Relative sizing for flex items
    >
      <div className="rounded-full overflow-hidden" style={{ width: '100px', height: '100px' }}>
        <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
      </div>
      <p className="text-base font-medium mt-2">{name}</p>
    </div>
  );
};

export default CategoryCard;
