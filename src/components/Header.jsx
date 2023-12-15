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
        {loginInfo.isLogin ? (
          <p>Logged in as {loginInfo.userName}</p>
        ) : (
          <p>Not logged in</p>
        )}
        1
      </div>
    </div>
  );
}
