import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading';

import '../../styles/home/homeFilm.scss';

export default function HomeFilm() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const defaultMovieImg =
    // 'https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_1280.jpg';
    'https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_1280.jpg';

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=1953&region=US&sort_by=popularity.desc`,
  //         {
  //           headers: {
  //             accept: 'application/json',
  //             Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  //           },
  //         }
  //       );
  //       setData(response);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }

  //     fetchData();
  //   };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=1959&region=US&sort_by=popularity.desc',
          {
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log('home data >>', data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
      <div className="home-films-grids">
        {/* //data가 없다면 표시할 div */}
        {data &&
          data.results.slice(0, 6).map((movie, index) => (
            <div key={index} className="film-grid">
              <div className="home-img-wrapper image-hover-effect">
                <Link to={`/films/detail/${movie.id}`}>
                  <img
                    src={
                      movie.backdrop_path || movie.poster_path
                        ? `https://image.tmdb.org/t/p/original${
                            movie.backdrop_path || movie.poster_path
                          }`
                        : defaultMovieImg
                    }
                    alt={movie.title}
                  />
                </Link>
              </div>
              <div className="home-movie-info movie-info-flex">
                <Link to={`/films/detail/${movie.id}`}>
                  <p className="movie-title-p">{movie.title}</p>
                </Link>
                <div>
                  <Link to={`/films/detail/${movie.id}`}>
                    <span className="more-span">more</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
