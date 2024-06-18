import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExplorePage from './components/ExplorePage';
import DishDetailsPage from './components/DishDetailsPage';
import { DishProvider } from './components/Context'; // Updated path
import Navbar from './components/Navbar';

function App() {
  return (
    <DishProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<ExplorePage />} />
            <Route path="/dish/:dishId" element={<DishDetailsPage />} />
          </Routes>
        </div>
      </Router>
    </DishProvider>
  );
}

export default App;
