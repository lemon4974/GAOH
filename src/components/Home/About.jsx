import React from 'react';
// import { ReactComponent as Icon } from '../public/Arrow_Link.svg';

import '../../styles/home/about.scss';

export default function About() {
  return (
    <div className="about-div">
      <div className="about-title">About</div>
      <div className="about-content-flex">
        <div>
          <div className="about-content" style={{ textAlign: 'justify' }}>
            This React application features a movie search page where users can
            search for movies by title. When a query is entered, the app fetches
            data from an API, filtering movies released between 1927 and 1969.
            If there are no results or if a query hasn't been made, it prompts
            users to try a different search term. The page includes a responsive
            search bar and displays search results with detailed movie
            information, enhancing the user experience in discovering classic
            films.
          </div>
          {/* <div className="about-link">
            <span>Read more</span>
            <img src={'/svg/Arrow_Link.svg'} alt="사진" />
          </div> */}
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
        {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <img
            style={{ filter: "grayscale(100%)", width: "70%" }}
            src={"/img/sample.jpg"}
            alt="샘플 사진"
          />
        </div> */}
      </div>
    </div>
  );
}
