import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MovieResult({ query }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      //query가 없다면 return
      if (!query) return;
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
            query
          )}&include_adult=false&language=ko-KR&page=1`,
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
  }, [query]);

  console.log('data >>', data);

  return (
    <div style={{ height: '20vh' }}>
      <div>movie</div>
      {data &&
        data.results.map((movie, index) => (
          <div key={index}>
            <p>Title: {movie.original_title}</p>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
              alt={movie.name}
            />
          </div>
        ))}
    </div>
  );
}
