import React, { useState, useEffect } from "react";
import axios from "axios";

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
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTgyNDhlY2NiZDUzNGNkYjAxNWY0MDhkNWMyMGUzOCIsInN1YiI6IjY1NjljM2ZmZWEzN2UwMDE0ZWQ2ZWI3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0cMyb46qJgcy9qYvXQCKqRfAW9yldC3HPy4YZizCVaM",
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

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  console.log("data >>", data);

  return (
    <div>
      <div>movie</div>
      {data &&
        data.results.map((movie, index) => (
          <div key={index}>
            <p>Title: {movie.original_title}</p>
            <div className="img-wrapper">
              {movie.backdrop_path}?
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.name}
              />
              :
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.name}
              />
            </div>
            <div>
              <div className="date-div">{formatDate(movie.release_date)}</div>
              <div className="title-content">{movie.original_title}</div>
              <div>
                <div>Genre</div>
                <div>장르 태그</div>
              </div>
              <div>
                <div>plot</div>
                <div>something written...</div>
              </div>
              <button>Details</button>
            </div>
          </div>
        ))}
    </div>
  );
}
