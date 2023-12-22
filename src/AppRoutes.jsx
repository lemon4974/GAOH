import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MovieList from './pages/MovieList';
// import ReviewList from "./pages/ReviewList";
import Header from './components/Header';
import Footer from './components/Footer';
import SearchResult from './pages/SearchResult';
import Films from './pages/Films';
import MovieDetail from './pages/MovieDetail';

import '../src/styles/footerFixer.scss';
import '../src/styles/footer.scss';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="all-wrapper">
        <div className="content-wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/movielist" element={<MovieList />} />
            <Route path="/films" element={<Films />} />
            <Route path="/films/detail/:movieId" element={<MovieDetail />} />

            {/* <Route path="/reviewlist" element={<ReviewList />} /> */}
            <Route path="/search" element={<SearchResult />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
