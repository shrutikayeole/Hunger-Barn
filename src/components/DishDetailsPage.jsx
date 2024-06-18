// DishDetailsPage.jsx

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import DishDetailsCard from './DishDetailsCard';
import { DishContext } from './Context'; // Updated path

const DishDetailsPage = () => {
  const { dishId } = useParams();
  const { dishList } = useContext(DishContext);
  const dish = dishList.find((d) => d.id === dishId);

  if (!dish) {
    return <div>Dish not found</div>;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="absolute inset-0 backdrop-blur-lg"></div>
      <DishDetailsCard dish={dish} />
    </div>
  );
};

export default DishDetailsPage;
