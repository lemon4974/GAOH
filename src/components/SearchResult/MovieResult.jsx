import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function MovieResult({ query }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const genreMapping = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  const getGenreNames = (genreIds) => {
    return genreIds
      .map((id) => genreMapping[id])
      .filter((name) => name)
      .join(" ");
  };

  useEffect(() => {
    const fetchData = async () => {
      //query가 없다면 return
      if (!query) return;
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
            query
          )}&include_adult=false&language=en-US&page=1`,
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
      {/* <div>movie</div> */}
      {data &&
        data.results.map((movie, index) => (
          <div className="one-movie-div" key={index}>
            {/* <p>Title: {movie.original_title}</p> */}
            <div className="img-wrapper">
              <Link to={`/films/detail/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${
                    movie.backdrop_path || movie.poster_path
                  }`}
                  alt={movie.name}
                />
              </Link>
            </div>
            <div>
              <div className="date-div">{formatDate(movie.release_date)}</div>

              <Link to={`/films/detail/${movie.id}`}>
                <div className="title-content">{movie.original_title}</div>
              </Link>
              <div className="movie-search-data">
                <div className="search-detail-title">Genre</div>
                <div>{getGenreNames(movie.genre_ids)}</div>
              </div>
              <div className="movie-search-data">
                <div className="search-detail-title">Plot</div>
                <div>{movie.overview}</div>
              </div>
              <div className="movie-btn-flex">
                <Link to={`/films/detail/${movie.id}`}>
                  <button>Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
