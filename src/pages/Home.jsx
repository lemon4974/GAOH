// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/home/home.scss';
import MovieReel from '../components/Home/MovieReel';
import Ticket from '../components/Home/Ticket';
import About from '../components/Home/About';
import Search from '../components/Home/Search';

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

  console.log('data >>', data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <div className="wrapper">
        <div className="home-title">The Golden Age Of Hollywood</div>
        {/* <div className="home-subtitle title-2">Film Festival</div> */}
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
    </div>
  );
}
