import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Link, useNavigate } from 'react-router-dom';

// import { loginState } from '../';
import { loginState } from '../state/userNameState';

import '../styles/header.scss';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
// import MovieCreationIcon from '@mui/icons-material/MovieCreation';
// import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import { OriginalState, SnowState, modeState } from '../state/theme';

export default function Header() {
  // const user = useRecoil
  // const loginInfo = useRecoilState(loginState);
  // const [loginInfo, setLoginInfo] = useRecoilState(loginState);

  const [divName, setDivName] = useState('snow');
  const [Theme, setTheme] = useRecoilState(modeState);

  const originalMode = useRecoilValue(OriginalState);
  const snowMode = useRecoilValue(SnowState);

  const toggle = () => {
    Theme === originalMode ? setTheme(snowMode) : setTheme(originalMode);
  };

  const current = useRecoilValue(modeState);
  // const

  return (
    <header className="wrapper">
      <div className="header-div">
        {/* {loginInfo.isLogin ? (
          <p>Logged in as {loginInfo.userName}</p>
        ) : (
          <p>Not logged in</p>
        )} */}
        <Link to="films">
          <div className="logo">
            <LocalMoviesIcon />
            {/* <MovieCreationIcon /> */}
            {/* <TheaterComedyIcon /> */}
            <div>GAOH</div>
          </div>
        </Link>
        <div className="detail-link">
          <Link to="/">
            <div className="link">MAIN</div>
          </Link>
          <Link to="films">
            <div className="link">FILMS</div>
          </Link>
          {/* <div>ACTOR</div> */}
          <Link to="search">
            <div className="link">SEARCH</div>
          </Link>
          {/* <Link to="login"> */}
          {/* <div className="link" onClick={toggle}>
            Theme
          </div> */}
          {/* </Link> */}
        </div>

        {/* 로고// 메인,검색  로그인or로그아웃 */}
      </div>
    </header>
  );
}
