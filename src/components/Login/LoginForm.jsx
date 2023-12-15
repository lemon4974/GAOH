import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { loginState } from '../../state/userNameState';

export default function LoginForm() {
  //   const setUserName = useSetRecoilState(userNameState);
  //useSetRecoilState : 상태를 업데이트 하는 setter 함수.
  // 현재 로그인한 userName을 전역으로 관리

  const [loginInfo, setLoginInfo] = useRecoilState(loginState);
  const [input, setInput] = useState('');
  // const [loginState, setLoginState] = useState({
  //   isLogin: false,
  //   userName: '',
  // });
  const loginText = loginState.isLogin ? 'LOGOUT' : 'LOGIN';

  const onChangeInputHandler = (e) => {
    const text = e.target.value;
    setInput(text);
  };

  // const inputText = <input type="text" onChange={onChangeInputHandler} />;

  // const getUserName = window.localStorage.getItem('userName');

  // 로컬 스토리지에 유저 data 저장
  // useEffect(() => {
  //   // const storedUserName = window.localStorage.getItem('userName');
  //   // if (storedUserName) {
  //   //   setLoginInfo({
  //   //     isLogin: true,
  //   //     userName: storedUserName,
  //   //   });
  //   // }
  //   // console.log()
  // }, [setLoginInfo]); // 의존성 배열 설정 [state.userName] 의존성 배열과의 차이?
  // console.log('loginstate >>', loginState);

  const onClickSubmitHandler = (e) => {
    e.preventDefault();
    if (!loginInfo.isLogin) {
      // false 시 실행
      setLoginInfo({
        isLogin: true,
        userName: input,
      });
      // setUserName(input);
    } else {
      setLoginInfo({
        isLogin: false,
        userName: '',
      });
    }

    setInput('');
  };

  return (
    <div>
      <span>
        {loginInfo.isLogin ? (
          <h2>안녕하세요 {loginInfo.userName}</h2>
        ) : (
          <h2>로그인 X </h2>
        )}
      </span>
      <form>
        <input type="text" value={input} onChange={onChangeInputHandler} />
        <button type="button" onClick={onClickSubmitHandler}>
          {loginText}
        </button>
      </form>
    </div>
  );
}
