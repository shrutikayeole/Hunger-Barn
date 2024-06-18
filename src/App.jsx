import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExplorePage from './components/ExplorePage';
import DishDetailsPage from './components/DishDetailsPage';
import { dishes } from './components/data';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/dish/:dishId" element={<DishDetailsPage dishes={dishes} />} />
      </Routes>
    </Router>
  );
};

export default App;
