import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "../styles/movieDetail/moviedetail.scss";
import ImageCarousel from "../components/MovieDetail/ImageCarousel";

export default function MovieDetail() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
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
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("data >>", data);

  const formatYear = (dateString) => {
    const options = { year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="wrapper">
      <div className="title-grids">
        <div className="title-grid-back">back</div>
        <div className="title-1 title-grid">Breakfast at Tiffany's</div>
        <div></div>
      </div>

      <div className="movie-data-flex">
        <p>Movie ID: {movieId}</p>
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
                <span className="movie-data">
                  {formatYear(data.release_date)}
                </span>
              </div>
            </div>
            <div className="bottom-line-div">
              <span className="movie-data-type">runtime</span>
              <div>
                <span className="movie-data">{data.runtime} mins</span>
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
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. A, nihil
        laborum soluta omnis eaque accusamus perferendis, reiciendis aut porro,
        ab ex sit non neque. Magnam, corrupti nobis, molestiae harum consequatur
        delectus doloremque nam labore quos id architecto neque modi porro
        itaque et deleniti minus officiis reiciendis facilis, saepe voluptas. Ea
        obcaecati dicta ipsam? Quia reprehenderit recusandae odit dignissimos
        commodi dolore accusantium ipsum aspernatur esse quae deleniti, eius
        excepturi et iusto qui non officia at molestiae facere dolores
        exercitationem? Earum, laboriosam? */}
        {data.overview}
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
