import React from 'react';

import '../styles/searchresult/searchresult.scss';
import MovieResult from '../components/SearchResult/MovieResult';

export default function SearchResult() {
  return (
    <div>
      <div className="wrapper">
        <div className="search-result-title space-between">
          <div className="title-1">Search Result for " "</div>
          <div className="search-result-title">
            <div className="title-2">latest</div>
            <div className="title-2">popular</div>
          </div>
        </div>
        <MovieResult />
      </div>
    </div>
  );
}
