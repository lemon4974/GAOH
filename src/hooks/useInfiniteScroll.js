import { useEffect } from 'react';

function useInfiniteScroll(callback) {
  useEffect(() => {
    function scrollBottom() {}

    // 이벤트 핸들러 등록
    window.addEventListener('scroll', scrollBottom);

    // 클린업 함수
    return () => {
      window.removeEventListener('scroll', scrollBottom);
    };
  }, [callback]); //디펜던시
}

export default useInfiniteScroll;
