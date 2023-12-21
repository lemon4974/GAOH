import React from 'react';
import { useLocation } from 'react-router-dom';

import '../styles/searchresult/searchresult.scss';
import MovieResult from '../components/SearchResult/MovieResult';

export default function SearchResult() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');

  return (
    <div>
      <div className="wrapper">
        <div className="search-result-title space-between">
          <div className="title-1">Search Result for "{query}"</div>
          <div className="search-result-title">
            <div className="title-2">latest</div>
            <div className="title-2">popular</div>
          </div>
        </div>
        <MovieResult query={query} />
      </div>
    </div>
  );
}
