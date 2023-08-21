import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { FavouritesPage } from './pages/FavouritesPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/dbMovie" element={<HomePage />} />
        <Route path="/dbMovie/favourites" element={<FavouritesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
