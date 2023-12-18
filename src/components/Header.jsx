import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
// import { loginState } from '../';
import { loginState } from '../state/userNameState';

import '../styles/header.scss';

export default function Header() {
  // const user = useRecoil
  // const loginInfo = useRecoilState(loginState);
  const [loginInfo, setLoginInfo] = useRecoilState(loginState);
  return (
    <div>
      <div className="header-div">
        {/* {loginInfo.isLogin ? (
          <p>Logged in as {loginInfo.userName}</p>
        ) : (
          <p>Not logged in</p>
        )} */}
        <div className="logo">LOGO</div>
        <div className="detail-link">
          <div className="link">MAIN</div>
          <div className="link">FILMS</div>
          {/* <div>ACTOR</div> */}
          <div className="link">SEARCH</div>
          <div className="link">LOGIN</div>
        </div>

        {/* 로고// 메인,검색  로그인or로그아웃 */}
      </div>
    </div>
  );
}
