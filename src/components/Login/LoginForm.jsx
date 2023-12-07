import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

export default function LoginForm() {
  //   const setUserName = useSetRecoilState(userNameState);
  //useSetRecoilState : 상태를 업데이트 하는 setter 함수.
  // 현재 로그인한 userName을 전역으로 관리

  const [input, setInput] = useState('');
  const [loginState, setLoginState] = useState({
    isLogin: false,
    userName: '',
  });

  // 로컬 스토리지에 유저 data 저장
  useEffect(() => {
    const storedUserName = window.localStorage.getItem('userName');
    if (storedUserName) {
      setLoginState({
        isLogin: true,
        userName: storedUserName,
      });

      //   storedUserName()
      console.log('loginstate', loginState);
    }
    // console.log()
  }, []);
  console.log('loginstate >>', loginState);

  return (
    <div>
      <span>{loginState.userName}</span>
      <form>
        <input type="text" />
        <button></button>
      </form>
    </div>
  );
}
