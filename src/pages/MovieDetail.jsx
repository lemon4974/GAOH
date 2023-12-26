import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "../styles/movieDetail/moviedetail.scss";
import ImageCarousel from "../components/MovieDetail/ImageCarousel";
// import { SwipeableMobileStepper } from "../components/MovieDetail/SwipeableMobileStepper";
import SwipeableMobileStepper from "../components/MovieDetail/SwipeableMobileStepper";


export default function MovieDetail() {
  const [data, setData] = useState(null);
  const [actors, setActors] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      // console.log("movieId", movieId);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          // "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=1953&region=US&sort_by=popularity.desc",
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
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchActors = async () => {
      // console.log("movieId", movieId);
      try {
        const response = await axios.get(
          // `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTgyNDhlY2NiZDUzNGNkYjAxNWY0MDhkNWMyMGUzOCIsInN1YiI6IjY1NjljM2ZmZWEzN2UwMDE0ZWQ2ZWI3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0cMyb46qJgcy9qYvXQCKqRfAW9yldC3HPy4YZizCVaM",
            },
          }
        );
        setActors(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchActors();
  }, []);

  console.log("data >>", data);
  console.log("actors >>", actors);

  const formatYear = (dateString) => {
    const options = { year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="wrapper">
      <div className="title-grids">
        <div className="title-grid-back">back</div>
        <div className="title-1 title-grid">{data && data.original_title}</div>
        <div></div>
      </div>

      <div className="movie-data-flex">
        {/* <p>Movie ID: {movieId}</p> */}
        <div className="img-wrapper">
          <img
            src="https://i.ytimg.com/vi/Uqc9XutbOIU/maxresdefault.jpg"
            alt="티파니에서 아침을 이미지"
            style={{ filter: "grayscale(100%)" }}
          />
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
            <button className="oreo-btn">IMDB</button>
            {/* <Link to=""> */}
            <button>YouTube</button>
            {/* </Link> */}
          </div>
        </div>
      </div>

      <div className="content-div">
        <div className="title-content">StoryLine</div>

        {data && data.overview}
      </div>

      <div className="content-div">
        <div className="title-content">videos</div>
        <video src=""></video>
        <video src=""></video>
      </div>

      <div className="content-div">
        <div className="title-content">photos</div>
        sdf
        {/* <ImageCarousel /> */}
        {/* <SwipeableMobileStepper /> */}
        <SwipeableMobileStepper/>
      </div>

      <div className="content-div">
        <div className="title-content">you might also like</div>
      </div>

      <div></div>

      <div>MovieDetail</div>
      {/* Render your movie details here */}
    </div>
  );
}
