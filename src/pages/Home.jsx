// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/home/home.scss';
import MovieReel from '../components/Main/MovieReel';
import Ticket from '../components/Main/Ticket';
import About from '../components/Main/About';
import Search from '../components/Main/Search';

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1',
          'https://api.themoviedb.org/3/search/movie?query=Audrey+Hepburn&api_key=c18248eccbd534cdb015f408d5c20e38',
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
      <div className="wrapper">
        <div className="home-title">The Golden Age Of Hollywood</div>
        <div className="home-subtitle">Film Festival</div>
      </div>
      <MovieReel />

      <div>
        <Ticket />
      </div>

      <div className="wrapper">
        <About />
        <Search />
        <div>search</div>
      </div>
      <div>film동영상</div>

      <div className="wrapper">
        <div>FAQ</div>
        <div>nodemailer?</div>
      </div>

      {/* <div style={{ height: '80vh' }}>
        {data &&
          data.results.map((person, index) => (
            <div key={index}>
              <p>Name: {person.id}</p>
              <img
                src={
                  `https://image.tmdb.org/t/p/w500${person.backdrop_path}` ||
                  `https://image.tmdb.org/t/p/w500${person.poster_path}`
                }
                alt={person.name}
              />
            </div>
          ))}
      </div> */}
    </div>
  );
}
