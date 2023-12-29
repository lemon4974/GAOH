import React, { useState, useRef, useCallback, useEffect } from 'react';
import LoginForm from '../components/Login/LoginForm';
import axios from 'axios';

import useFetch from '../hooks/useFetch';

export default function Login() {
  //이메일 이름 비밀번호 좋아하는 영화 장르....?정도의 폼?
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { loading, error, list } = useFetch(query, page);
  const loader = useRef(null);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <div>
      Login
      <LoginForm />
      <div className="App">
        <h1>Infinite Scroll</h1>
        <h2>with IntersectionObserver</h2>
        <input type="text" value={query} onChange={handleChange} />
        <div>
          {list.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>Error!</p>}
        <div ref={loader} />
      </div>
    </div>
  );
}
