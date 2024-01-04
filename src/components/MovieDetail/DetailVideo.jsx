// import React from "react";
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

export default function DetailVideo() {
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchVideos = async () => {
      // console.log("movieId", movieId);
      try {
        const response = await axios.get(
          //   `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          {
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
            },
          }
        );
        setVideos(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [movieId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // console.log('detail videos', videos);

  const createYouTubeUrl = (key) => `https://www.youtube.com/embed/${key}`;

  return (
    <div
      className="video-gallery"
      // style={{
      //   display: 'flex',
      //   flexDirection: 'row',
      //   width: '100%',
      //   gap: '10px',
      // }}
    >
      {videos &&
        videos.slice(0, 2).map((video, index) => (
          <div key={index} className="video-container">
            <div>
              <iframe
                // width="100%"
                // height="100%"
                src={createYouTubeUrl(video.key)}
                title={video.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {/* <h3>{video.name}</h3> */}
            </div>
          </div>
        ))}
    </div>
  );
}
