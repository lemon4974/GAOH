import React, { useState } from 'react';
import axios from 'axios';

export default function Main() {
  const [data, setData] = useState();
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/account/20778393',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTgyNDhlY2NiZDUzNGNkYjAxNWY0MDhkNWMyMGUzOCIsInN1YiI6IjY1NjljM2ZmZWEzN2UwMDE0ZWQ2ZWI3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0cMyb46qJgcy9qYvXQCKqRfAW9yldC3HPy4YZizCVaM',
    },
  };

  const getData = async () => {
    const res = await axios
      .get('https://api.themoviedb.org/3/account/20778393', {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTgyNDhlY2NiZDUzNGNkYjAxNWY0MDhkNWMyMGUzOCIsInN1YiI6IjY1NjljM2ZmZWEzN2UwMDE0ZWQ2ZWI3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0cMyb46qJgcy9qYvXQCKqRfAW9yldC3HPy4YZizCVaM',
        },
      })
      .then((res) => {
        setData(res.data);
      });
  };

  getData();

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      //   console.log(response.data.avatar.id);
      const res = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
  return (
    <div>
      <p>{res.id}</p>
      <p>{}</p>
    </div>
  );
}
