import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Film() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=1953&region=US&sort_by=popularity.desc',
          {
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTgyNDhlY2NiZDUzNGNkYjAxNWY0MDhkNWMyMGUzOCIsInN1YiI6IjY1NjljM2ZmZWEzN2UwMDE0ZWQ2ZWI3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0cMyb46qJgcy9qYvXQCKqRfAW9yldC3HPy4YZizCVaM',
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

  console.log('data >>', data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {/* <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div> */}
      <div className="films-grids">
        {/* //data가 없다면 표시할 div */}
        {data &&
          data.results.map((movie, index) => (
            <div key={index} className="film-grid">
              <div className="img-wrapper">
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                  alt={movie.title}
                />
              </div>
              <div className="movie-info movie-info-flex">
                <p>{movie.title}</p>
                <div>
                  <a href="">
                    <span style={{ color: 'red' }}>more</span>
                  </a>
                  {/* <img src={'/svg/Arrow_Up_Right.svg'} alt="사진" /> */}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
