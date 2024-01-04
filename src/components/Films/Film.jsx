import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading';

export default function Film({ year, filter }) {
  const [data, setData] = useState({ results: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  const defaultMovieImg =
    // 'https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_1280.jpg';
    'https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_1280.jpg';

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&primary_release_year=${year}&region=US&sort_by=${filter}`,
  //         {
  //           headers: {
  //             accept: 'application/json',
  //             Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  //           },
  //         }
  //       );
  //       setData((prevData) => ({
  //         ...prevData,
  //         results: [...prevData.results, ...response.data.results],
  //       }));
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };

  //   fetchData();
  // }, [year, filter, page]);

  // 초기 화면 세팅 & year filter change handling
  useEffect(() => {
    setLoading(true);
    setPage(1); // Reset page number on year/filter change
    fetchData(1); // Fetch first page of data
  }, [year, filter]);

  // Infinite scrolling logic
  useEffect(() => {
    if (page > 1) {
      fetchData(page); // 다음 페이지의 data를 fetch 해 옴.
    }
  }, [page]);

  // 데이터 가져오는 함수
  const fetchData = async (pageNum) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNum}&primary_release_year=${year}&region=US&sort_by=${filter}`,
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
          },
        }
      );
      setData((prevData) => ({
        ...prevData,
        results:
          pageNum === 1
            ? response.data.results
            : [...prevData.results, ...response.data.results],
      }));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  console.log('film data >>', data);
  console.log('film page >>', page);
  console.log('film year >>', year);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    });
    if (loader.current) observer.observe(loader.current);

    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [handleObserver]);

  // if (loading)
  //   return (
  //     <div>
  //       <Loading />
  //     </div>
  //   );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="films-grids">
        {/* //data가 없다면 표시할 div */}
        {data &&
          data.results.map((movie, index) => (
            <div key={index} className="film-grid">
              <div className="img-wrapper image-hover-effect">
                <Link to={`/films/detail/${movie.id}`}>
                  <img
                    src={
                      movie.backdrop_path || movie.poster_path
                        ? `https://image.tmdb.org/t/p/original${
                            movie.backdrop_path || movie.poster_path
                          }`
                        : defaultMovieImg
                    }
                    alt={movie.title}
                  />
                </Link>
              </div>
              <div className="movie-info movie-info-flex">
                <Link to={`/films/detail/${movie.id}`}>
                  <p className="movie-title-p">{movie.title}</p>
                </Link>
                <div>
                  <Link to={`/films/detail/${movie.id}`}>
                    <span className="more-span">more</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      {loading && (
        <div>
          <Loading />
        </div>
      )}
      {error && <p>Error: {error.message}</p>}
      <div ref={loader} />
    </div>
  );
}
