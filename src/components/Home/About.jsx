import React from 'react';
// import { ReactComponent as Icon } from '../public/Arrow_Link.svg';

import '../../styles/home/about.scss';

export default function About() {
  return (
    <div className="about-div">
      <div className="about-title">About</div>
      <div className="about-content-flex">
        <div style={{ width: '50%' }}>
          <div className="about-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus hic
            quisquam tempore nemo esse, reiciendis id voluptates cumque, aut cum
            fugiat porro reprehenderit. Praesentium tenetur ipsa commodi, fugiat
            consectetur deserunt omnis repellendus aliquam itaque eaque sequi
            cupiditate dolorem maiores deleniti officia similique in voluptatem
            delectus id. Inventore, sapiente fuga. Eligendi, aliquid ducimus.
            Cum vero, porro deserunt eveniet culpa cumque laboriosam ut
            voluptas,
          </div>
          <div className="about-link">
            <span>Read more</span>
            <img src={'/svg/Arrow_Link.svg'} alt="사진" />
          </div>
          <div>
            {/* <img src="" alt="사진" /> */}
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              ea inventore maiores quod qui cum quisquam natus. Repudiandae
              dignissimos dolore eius saepe voluptate vel unde! Et libero
              dolorum fugiat illum!
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <img
            style={{ filter: 'grayscale(100%)', width: '70%' }}
            src={'/img/sample.jpg'}
            alt="샘플 사진"
          />
        </div>
      </div>
    </div>
  );
}
