import React, { useState } from "react";
import Film from "../components/Films/Film";

import "../styles/films/films.scss";

export default function Films() {
  // year 1927 부터 1969. option 태그용 data 생성
  const years = Array.from({ length: 1969 - 1927 + 1 }, (_, i) => 1927 + i);
  const [selectedYear, setSelectedYear] = useState("1953"); // Default year

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  // filter tag
  const [filter, setFilter] = useState("popularity.desc");

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

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
            <label class="button searchbutton" for="searchright">
              <span class="mglass">&#9906;</span>
            </label>
          </form>
        </div>
        <div>Sort by</div>
        <div>
          <select name="year" id="year-select" onChange={handleYearChange}>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select name="filter" id="filter-select" onChange={handleFilterChange}>
            <option value="popularity.desc">popular</option>
            <option value="primary_release_date.desc">latest</option>
          </select>
        </div>
      </div>
      <Film year={selectedYear} filter={filter}/>
    </div>
  );
}
