import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home/homeIntro.scss";

export default function HomeFilmIntro() {
  return (
    <div>
      <div className="intro-about-div">
        <div className="about-title">Films</div>
        <div className="about-content-flex">
          <div className="about-content-wrapper">
            <div className="about-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus hic
              quisquam tempore nemo esse, reiciendis id voluptates cumque, aut
              cum fugiat porro reprehenderit. Praesentium tenetur ipsa commodi,
              fugiat consectetur deserunt omnis repellendus aliquam itaque eaque
              sequi cupiditate dolorem maiores deleniti officia similique in
              voluptatem delectus id. Inventore, sapiente fuga. Eligendi,
              aliquid ducimus. Cum vero, porro deserunt eveniet culpa cumque
              laboriosam ut voluptas,
            </div>
            <Link to="/films">
              <div className="about-link">
                <span>Go to films pages</span>

                <img src={"/svg/Arrow_Link.svg"} alt="사진" />
              </div>
            </Link>
            <div>
              {/* <img src="" alt="사진" /> */}
              {/* <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              ea inventore maiores quod qui cum quisquam natus. Repudiandae
              dignissimos dolore eius saepe voluptate vel unde! Et libero
              dolorum fugiat illum!
            </div> */}
            </div>
          </div>
          <div className="intro-films-img-wrapper">
            <img
              style={{ filter: "grayscale(100%)", width: "70%" }}
              src={"/img/sample.jpg"}
              alt="샘플 사진"
            />
          </div>
        </div>
      </div>
      <div className="search-about-div">
        <div className="about-title">Search</div>
        <div className="about-content-flex">
          <div className="about-content-wrapper">
            <div className="about-content" style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus hic
              quisquam tempore nemo esse, reiciendis id voluptates cumque, aut
              cum fugiat porro reprehenderit. Praesentium tenetur ipsa commodi,
              fugiat consectetur deserunt omnis repellendus aliquam itaque eaque
              sequi cupiditate dolorem maiores deleniti officia similique in
              voluptatem delectus id. Inventore, sapiente fuga. Eligendi,
              aliquid ducimus. Cum vero, porro deserunt eveniet culpa cumque
              laboriosam ut voluptas,
            </div>
            <Link to="/search">
              <div className="about-link">
                <span>Go to search pages</span>
                <img src={"/svg/Arrow_Link.svg"} alt="사진" />
              </div>
            </Link>
            <div>
              {/* <img src="" alt="사진" /> */}
              {/* <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              ea inventore maiores quod qui cum quisquam natus. Repudiandae
              dignissimos dolore eius saepe voluptate vel unde! Et libero
              dolorum fugiat illum!
            </div> */}
            </div>
          </div>
          <div className="intro-search-img-wrapper">
            <img
              style={{ filter: "grayscale(100%)", width: "70%" }}
              src={"/img/sample.jpg"}
              alt="샘플 사진"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
