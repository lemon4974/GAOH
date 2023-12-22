import React from 'react';
import { useParams } from 'react-router-dom';

import '../styles/movieDetail/moviedetail.scss';
import ImageCarousel from '../components/MovieDetail/ImageCarousel';

export default function MovieDetail() {
  const { movieId } = useParams();

  return (
    <div className="wrapper">
      <div className="title-grids">
        <div className="title-grid-back">back</div>
        <div className="title-1 title-grid">Breakfast at Tiffany's</div>
        <div></div>
      </div>

      <div className="movie-data-flex">
        <img
          src="https://i.ytimg.com/vi/Uqc9XutbOIU/maxresdefault.jpg"
          alt="티파니에서 아침을 이미지"
          style={{ width: '400px', filter: 'grayscale(100%)' }}
        />
        <div className="movie-data-btn-flex">
          <div className="movie-data-container">
            <div className="bottom-line-div">
              <span className="movie-data-type">genre</span>
              <div>
                <span className="movie-data">Comedy</span>
                <span className="movie-data">Drama</span>
                <span className="movie-data">Romance</span>
              </div>
            </div>
            <div className="bottom-line-div">
              <span className="movie-data-type">director</span>
              <div>
                <span className="movie-data">Blake Edwards</span>
              </div>
            </div>
            <div className="bottom-line-div">
              <span className="movie-data-type">stars</span>
              <div>
                <span className="movie-data">Audrey Hepburn</span>
                <span className="movie-data">George Peppard</span>
                <span className="movie-data">Patricia Neal</span>
              </div>
            </div>
            <div className="bottom-line-div">
              <span className="movie-data-type">year</span>
              <div>
                <span className="movie-data">1961</span>
              </div>
            </div>
            <div className="bottom-line-div">
              <span className="movie-data-type">runtime</span>
              <div>
                <span className="movie-data">114 minutes</span>
              </div>
            </div>
          </div>
          <div className="movie-btn-flex">
            <button className="oreo-btn">IMDB</button>
            <button>YouTube</button>
          </div>
        </div>
      </div>

      <div className="content-div">
        <div className="title-content">StoryLine</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, nihil
        laborum soluta omnis eaque accusamus perferendis, reiciendis aut porro,
        ab ex sit non neque. Magnam, corrupti nobis, molestiae harum consequatur
        delectus doloremque nam labore quos id architecto neque modi porro
        itaque et deleniti minus officiis reiciendis facilis, saepe voluptas. Ea
        obcaecati dicta ipsam? Quia reprehenderit recusandae odit dignissimos
        commodi dolore accusantium ipsum aspernatur esse quae deleniti, eius
        excepturi et iusto qui non officia at molestiae facere dolores
        exercitationem? Earum, laboriosam?
      </div>

      <div className="content-div">
        <div className="title-content">videos</div>
        <video src=""></video>
        <video src=""></video>
      </div>

      <div className="content-div">
        <div className="title-content">photos</div>
        sdf
        <ImageCarousel />
      </div>

      <div className="content-div">
        <div className="title-content">you might also like</div>
      </div>

      <div></div>

      <div>MovieDetail</div>
      {/* Render your movie details here */}
      <p>Movie ID: {movieId}</p>
    </div>
  );
}
