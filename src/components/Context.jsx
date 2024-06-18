import React, { createContext, useState } from 'react';
import { categories, dishes } from './data';

export const DishContext = createContext();

export const DishProvider = ({ children }) => {
  const [dishList, setDishList] = useState(dishes);
  const [categoryList, setCategoryList] = useState(categories);

  return (
    <DishContext.Provider value={{ dishList, categoryList }}>
      {children}
    </DishContext.Provider>
  );
};
