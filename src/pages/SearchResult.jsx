import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import '../styles/searchresult/searchresult.scss';
import MovieResult from '../components/SearchResult/MovieResult';

import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

export default function SearchResult() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');

  return (
    <div>
      <div className="wrapper">
        <div className="SearchResult-page-title">
          {query
            ? `Search Result for "${query}"`
            : 'Click the Search icon to search!'}
        </div>
        {/* <div className="search-result-title"> */}
        <div className="search-result-title">
          <div className="search-container">
            <form action="/search" method="get">
              <input
                class="search2 expandright"
                id="searchright"
                type="search"
                name="q"
                placeholder="Search"
              />

              <label className="button searchbutton" htmlFor="searchright">
                <span className="mglass">&#9906;</span>
              </label>
            </form>
          </div>
          {/* <div className="title-2">latest</div> */}
          {/* <div className="title-2">popular</div> */}
        </div>
        {/* </div> */}
        <MovieResult query={query} />
      </div>
    </div>
  );
}
