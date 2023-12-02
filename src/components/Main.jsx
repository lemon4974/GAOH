import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

export default function Main() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/account/20778393',
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
    <div style={{}}>
      {data && (
        <>
          <p>ID: {data.id}</p>
        </>
      )}
    </div>
  );
}

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/account/20778393',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTgyNDhlY2NiZDUzNGNkYjAxNWY0MDhkNWMyMGUzOCIsInN1YiI6IjY1NjljM2ZmZWEzN2UwMDE0ZWQ2ZWI3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0cMyb46qJgcy9qYvXQCKqRfAW9yldC3HPy4YZizCVaM',
  },
};
