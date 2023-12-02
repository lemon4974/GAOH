import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MovieList from './pages/MovieList';
import ReviewList from './pages/ReviewList';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/movielist" element={<MovieList />} />
        <Route path="/reviewlist" element={<ReviewList />} />
      </Routes>
    </BrowserRouter>
  );
}
