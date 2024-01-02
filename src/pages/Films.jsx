import React, { useState, useRef } from 'react';
import Film from '../components/Films/Film';

import '../styles/films/films.scss';
import UseIntersectionObserver from '../hooks/useIntersectionObserver';

export default function Films() {
  // // request state
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // // ref
  // const rootRef = useRef(null);
  // const targetRef = useRef(null);

  // useIntersectionObserver({
  //   root: rootRef.current,
  //   target: targetRef.current,
  //   onIntersect: ([{ isIntersecting }]) => {
  //     if (
  //       isIntersecting &&
  //       !loading &&
  //       currentPage.current < totalPage.current
  //     ) {
  //       loadMoreImage();
  //     }
  //   },
  // });

  // year 1927 부터 1969. option 태그용 data 생성
  const years = Array.from({ length: 1969 - 1927 + 1 }, (_, i) => 1927 + i);
  const [selectedYear, setSelectedYear] = useState('1953'); // Default year

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  // filter tag
  const [filter, setFilter] = useState('popularity.desc');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="wrapper">
      <div className="title-div-flex">
        <div className="title-1">Films</div>
      </div>

      <div className="find-bar-flex">
        <div class="search-container">
          <form action="/search" method="get">
            <input
              class="search expandright"
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
        <div>Sort by</div>
        <div>
          <select
            name="year"
            id="year-select"
            onChange={handleYearChange}
            className="custom-select"
            style={{ width: '40px', display: 'flex', alignContent: 'baseline' }}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            name="filter"
            id="filter-select"
            onChange={handleFilterChange}
            className="custom-select2"
            style={{ width: '55px' }}
          >
            <option value="popularity.desc">Popular</option>
            <option value="primary_release_date.desc">Latest</option>
          </select>
        </div>
      </div>
      <Film year={selectedYear} filter={filter} />
      <div></div>
    </div>
  );
}
