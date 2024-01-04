import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../styles/movieDetail/moviedetail.scss';
// import ImageCarousel from "../components/MovieDetail/ImageCarousel";
// import { SwipeableMobileStepper } from "../components/MovieDetail/SwipeableMobileStepper";
import SwipeableMobileStepper from '../components/MovieDetail/SwipeableMobileStepper';
import SwipeableRecommendation from '../components/MovieDetail/SwipeableRecommendation';
import DetailVideo from '../components/MovieDetail/DetailVideo';

export default function MovieDetail() {
  const [data, setData] = useState(null);
  const [actors, setActors] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  const defaultMovieImg =
    // 'https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_1280.jpg';
    'https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_1280.jpg';

  //Back 클릭시 뒤로 가기 위함
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // This will take the user to the previous page
  };

  useEffect(() => {
    const fetchData = async () => {
      // console.log("movieId", movieId);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          // "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=1953&region=US&sort_by=popularity.desc",
          {
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  useEffect(() => {
    const fetchActors = async () => {
      // console.log("movieId", movieId);
      try {
        const response = await axios.get(
          // `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
          {
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
            },
          }
        );
        setActors(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchActors();
  }, [movieId]);

  console.log('movie detail data >>', data);
  // console.log("movie detail actors >>", actors);

  const formatYear = (dateString) => {
    const options = { year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="wrapper">
      <div className="title-grids">
        <div className="title-grid-back" onClick={handleBackClick}>
          back
        </div>
        <div className="title-1 title-grid">{data && data.original_title}</div>
        <div></div>
      </div>

      <div className="movie-data-flex">
        {/* <p>Movie ID: {movieId}</p> */}
        <div className="img-wrapper image-hover-effect">
          {/* <img
            src={`https://image.tmdb.org/t/p/original${
              data && data.backdrop_path
            }`}
            alt={`${data && data.original_title} 이미지`}
            // style={{ filter: 'grayscale(100%)' }}
          /> */}
          <img
            src={
              data && data.backdrop_path
                ? `https://image.tmdb.org/t/p/original${
                    data && data.backdrop_path
                  }`
                : defaultMovieImg
            }
            alt={`${data && data.original_title} 이미지`}
            // style={{ filter: 'grayscale(100%)' }}
          />

          {/* <img
                    src={
                      movie.backdrop_path || movie.poster_path
                        ? `https://image.tmdb.org/t/p/original${
                            movie.backdrop_path || movie.poster_path
                          }`
                        : defaultMovieImg
                    }
                    alt={movie.title}
                  /> */}
        </div>
        <div className="movie-data-btn-flex">
          <div className="movie-data-container">
            <div className="bottom-line-div">
              <span className="movie-data-type">genre</span>
              <div>
                {data &&
                  data.genres.map((genre, index) => (
                    <span key={index} className="movie-data">
                      {genre.name}
                    </span>
                  ))}
              </div>
            </div>
            <div className="bottom-line-div">
              <span className="movie-data-type">production</span>
              <div>
                {data &&
                  data.production_companies.map((company, index) => (
                    <span key={index} className="movie-data">
                      {company.name}
                    </span>
                  ))}
                {/* <span className="movie-data">Blake Edwards</span> */}
              </div>
            </div>
            <div className="bottom-line-div">
              <span className="movie-data-type">stars</span>
              <div>
                {actors &&
                  actors.cast.slice(0, 3).map((actor, index) => (
                    <span key={index} className="movie-data">
                      {actor.name}
                    </span>
                  ))}
                {/* <span className="movie-data">Audrey Hepburn</span>
                <span className="movie-data">George Peppard</span>
                <span className="movie-data">Patricia Neal</span> */}
              </div>
            </div>
            <div className="bottom-line-div">
              <span className="movie-data-type">year</span>
              <div>
                <span className="movie-data">
                  {data && formatYear(data.release_date)}
                </span>
              </div>
            </div>
            <div className="bottom-line-div">
              <span className="movie-data-type">runtime</span>
              <div>
                <span className="movie-data">{data && data.runtime} mins</span>
              </div>
            </div>
          </div>
          <div className="movie-btn-flex">
            <a href={`https://www.imdb.com/title/${data && data.imdb_id}/`}>
              <button className="Imdb-btn">IMDB</button>
            </a>
            <a href={`${data && data.homepage}`}>
              {data && data.homepage !== '' ? (
                <button className="oreo-btn">Homepage</button>
              ) : (
                <div></div>
              )}
            </a>
          </div>
        </div>
      </div>
      {data && data.overview && (
        <div className="content-div">
          <div className="title-content">StoryLine</div>
          <div className="storyline-content">{data && data.overview}</div>
        </div>
      )}

      <div className="content-div">
        <div className="title-content">videos</div>
        <DetailVideo movieId={movieId} />
      </div>

      <div className="content-div">
        <div className="title-content">photos</div>
        <SwipeableMobileStepper movieId={movieId} />
      </div>

      <div className="content-div">
        <div className="title-content">you might also like</div>
        {/* <SwipeableMobileStepper movieId={movieId} /> */}
        <SwipeableRecommendation movieId={movieId} />
      </div>

      <div></div>

      {/* <div>MovieDetail</div> */}
      {/* Render your movie details here */}
    </div>
  );
}
