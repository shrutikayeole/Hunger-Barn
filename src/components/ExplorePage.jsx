import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import DishCard from '../components/DishCard';
import { DishContext } from './Context'; // Updated path

const ExplorePage = () => {
  const { categoryList, dishList } = useContext(DishContext);

  return (
    <div className="explore-page">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Explore Various Categories</h2>
        <div className="overflow-x-auto whitespace-nowrap">
          <div className="flex space-x-2 p-2">
            {categoryList.map((category, index) => (
              <CategoryCard key={index} image={category.image} name={category.name} />
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Explore Delicious Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dishList.map((dish) => (
            <Link key={dish.id} to={`/dish/${dish.id}`}>
              <DishCard image={dish.image} name={dish.dishName} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
