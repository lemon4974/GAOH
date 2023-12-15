import React from 'react';
import '../styles/home/home.scss';

export default function Home() {
  return (
    <div>
      <i
        title="Go to top"
        onClick={() => window.scrollTo(0, 0)}
        id="myBtn"
        className="fa fa-arrow-up"
        aria-hidden="true"
      ></i>
      <div className="container">
        <div className="sidebar">
          <div className="sidebar-container">
            <a
              className="logo-link"
              href="#"
              onclick="sortMovies('popularity')"
            >
              <img
                src="https://i.imgur.com/AYldSBG.png"
                className="logo-image"
              />
            </a>
            <h2 className="title-genre">Discover</h2>
            <a
              className="category-link current"
              href="#"
              onclick="sortMovies('popularity')"
            >
              <div className="genre">Popular</div>
            </a>
            <a
              className="category-link"
              href="#"
              onclick="sortMovies('rating')"
            >
              <div className="genre">Top Rated</div>
            </a>
            <a
              className="category-link"
              href="#"
              onclick="sortMovies('grossing')"
            >
              <div className="genre">Grossing</div>
            </a>
            <h2 className="title-genre">Genres</h2>
            <a
              className="category-link"
              href="#"
              onclick="sortMovies('action')"
            >
              <div className="genre">Action</div>
            </a>
            <a
              className="category-link"
              href="#"
              onclick="sortMovies('adventure')"
            >
              <div className="genre">Adventure</div>
            </a>
            <a
              className="category-link"
              href="#"
              onclick="sortMovies('animation')"
            >
              <div className="genre">Animation</div>
            </a>
            <a
              className="category-link"
              href="#"
              onclick="sortMovies('comedy')"
            >
              <div className="genre">Comedy</div>
            </a>
            <a className="category-link" href="#" onclick="sortMovies('crime')">
              <div className="genre">Crime</div>
            </a>
            <a
              className="category-link"
              href="#"
              onclick="sortMovies('documentary')"
            >
              <div className="genre">Documentary</div>
            </a>
            <a className="category-link" href="#" onclick="sortMovies('drama')">
              <div className="genre">Drama</div>
            </a>
            <a
              className="category-link"
              href="#"
              onclick="sortMovies('family')"
            >
              <div className="genre">Family</div>
            </a>
            <a
              className="category-link"
              href="#"
              onclick="sortMovies('fantasy')"
            >
              <div className="genre">Fantasy</div>
            </a>
            <a
              className="category-link"
              href="#"
              onclick="sortMovies('history')"
            >
              <div className="genre">History</div>
            </a>
            <a
              className="category-link"
              href="#"
              onclick="sortMovies('horror')"
            >
              <div className="genre">Horror</div>
            </a>
            <a className="category-link" href="#" onclick="sortMovies('music')">
              <div className="genre">Music</div>
            </a>
            <a
              className="category-link"
              href="#"
              onclick="sortMovies('mystery')"
            >
              <div className="genre">Mystery</div>
            </a>
            <a
              className="category-link"
              href="#"
              onclick="sortMovies('romance')"
            >
              <div className="genre">Romance</div>
            </a>
            <a
              className="category-link"
              href="#"
              onclick="sortMovies('science fiction')"
            >
              <div className="genre">Science Fiction</div>
            </a>
            <a
              className="category-link"
              href="#"
              onclick="sortMovies('tv movie')"
            >
              <div className="genre">TV Movie</div>
            </a>
            <a
              className="category-link"
              href="#"
              onclick="sortMovies('thriller')"
            >
              <div className="genre">Thriller</div>
            </a>
            <a className="category-link" href="#" onclick="sortMovies('war')">
              <div className="genre">War</div>
            </a>
            <a
              className="category-link"
              href="#"
              onclick="sortMovies('western')"
            >
              <div className="genre">Western</div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="#"
              onclick="window.open('https://ko-fi.com/vincenzopiromalli')"
              className="coffee"
            >
              <img
                src="https://i.imgur.com/WP4kgsA.png"
                alt="Buy me a coffee"
              />
              {/* <span style="margin-left: 5px;">Buy me a coffee</span> */}
              <span style={{ marginLeft: '5px' }}>Buy me a coffee</span>
            </a>
          </div>
        </div>
        <div className="search">
          <form className="search-form">
            <button type="submit" className="search-button">
              <i className="fa fa-search"></i>
            </button>
            <input
              id="search"
              onKeyPress="return checkSubmit(event)"
              type="search"
              placeholder="&nbsp;Search for a movie..."
              className="search-input"
              value=""
            />
          </form>
        </div>
        <div className="content">
          <div className="inner-container">
            <div className="titles">
              <h1>Popular</h1>
              <h2>movies</h2>
            </div>
            <div className="item-container"></div>
            <div className="load-more">
              <i className="fa fa-plus-circle more" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
