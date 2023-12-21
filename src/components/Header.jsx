import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Link, useNavigate } from 'react-router-dom';

// import { loginState } from '../';
import { loginState } from '../state/userNameState';

import '../styles/header.scss';

export default function Header() {
  // const user = useRecoil
  // const loginInfo = useRecoilState(loginState);
  const [loginInfo, setLoginInfo] = useRecoilState(loginState);
  return (
    <div className="wrapper">
      <div className="header-div">
        {/* {loginInfo.isLogin ? (
          <p>Logged in as {loginInfo.userName}</p>
        ) : (
          <p>Not logged in</p>
        )} */}
        <div className="logo">LOGO</div>
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
          <Link to="login">
            <div className="link">LOGIN</div>
          </Link>
        </div>

        {/* 로고// 메인,검색  로그인or로그아웃 */}
      </div>
    </div>
  );
}
