import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home/homeIntro.scss';

export default function HomeFilmIntro() {
  return (
    <div>
      <div className="intro-about-div">
        <div className="about-title">Films</div>
        <div className="about-content-flex">
          <div className="about-content-wrapper">
            <div className="about-content">
              This React page provides an interface for exploring movies. Users
              can select a year (ranging from 1927 to 1969) and a filter option
              ('Popular' or 'Latest'). The selected year and filter are passed
              to the Film component, which displays a list of movies matching
              these criteria. At the top of the page, there's a search bar,
              allowing users to search for specific movies. This page offers
              various options for movie exploration, helping users easily find
              movies they are interested in.
            </div>
            <Link to="/films">
              <div className="about-link">
                <span>Go to films pages</span>

                <img src={'/svg/Arrow_Link.svg'} alt="사진" />
              </div>
            </Link>
            <div>
              {/* <img src="" alt="사진" /> */}
              {/* <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              ea inventore maiores quod qui cum quisquam natus. Repudiandae
              dignissimos dolore eius saepe voluptate vel unde! Et libero
              dolorum fugiat illum!
            </div> */}
            </div>
          </div>
          <div className="intro-films-img-wrapper">
            <img
              style={{ width: '70%', border: '2px solid #eb4d33' }}
              src={'/img/Infinite.gif'}
              alt="샘플 사진"
            />
          </div>
        </div>
      </div>
      <div className="search-about-div">
        <div className="about-title">Search</div>
        <div className="about-content-flex">
          <div className="about-content-wrapper">
            <div className="about-content" style={{ textAlign: 'justify' }}>
              This code represents a search functionality in a React
              application, comprising two components: SearchResult and
              MovieResult. SearchResult processes the query from the URL and
              displays the search bar and the page title, which changes based on
              the query's presence. MovieResult takes the query, fetches movie
              data via an API call, and filters movies released between 1927 and
              1969. It displays results with movie details or a message
              prompting a new search if no results are found. This setup
              efficiently manages user searches and results presentation.
            </div>
            <Link to="/search">
              <div className="about-link">
                <span>Go to search pages</span>
                <img src={'/svg/Arrow_Link.svg'} alt="사진" />
              </div>
            </Link>
            <div>
              {/* <img src="" alt="사진" /> */}
              {/* <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              ea inventore maiores quod qui cum quisquam natus. Repudiandae
              dignissimos dolore eius saepe voluptate vel unde! Et libero
              dolorum fugiat illum!
            </div> */}
            </div>
          </div>
          <div className="intro-search-img-wrapper">
            <img
              style={{ width: '70%', border: '2px solid #eb4d33' }}
              src={'/img/search.png'}
              alt="search 페이지 사진"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
