import React from 'react';
import Film from '../components/Films/Film';

import '../styles/films/films.scss';

export default function Films() {
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
          <select name="" id="">
            <option value="">Year</option>
            <option value="">popular</option>
          </select>
        </div>
        <div>
          <select name="" id="">
            <option value="">latest</option>
            <option value="">popular</option>
          </select>
        </div>
      </div>
      <Film />
    </div>
  );
}
