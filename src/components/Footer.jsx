import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/footer.scss';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import BrushIcon from '@mui/icons-material/Brush';
import GitHubIcon from '@mui/icons-material/GitHub';
import TodayIcon from '@mui/icons-material/Today';

export default function Footer() {
  return (
    <footer className="footer-div ">
      <div className="wrapper mobile-footer-center Icon">
        <div className="title-grid Icon">
          <div className="logo">
            <LocalMoviesIcon className="Icon" />

            <div className="Icon">GAOH</div>
          </div>
          <div className="website-title Icon">The Golden Age Of Hollywood</div>
          <div className="mobile-bg-color Icon"></div>
        </div>
        <div className="page-icon-flex Icon">
          {/* 이모티콘 대체 */}
          <div className="mobile-pg-icon Icon">
            <div className="pages-flex Icon">
              <Link to="/" className="Icon">
                <div className="Icon">main</div>
              </Link>
              <Link to="films" className="Icon">
                <div className="Icon">films</div>
              </Link>
              <Link to="search" className="Icon">
                <div className="Icon">search</div>
              </Link>
            </div>
            <div className="pages-flex Icon">
              <a
                href="https://sunrise-coal-31d.notion.site/yellow-blue-c8d5aa6bdb2841d6afce2a11332504ee"
                className="Icon"
              >
                <div className="Icon notion">Notion</div>
              </a>
              <a
                // href="https://docs.google.com/presentation/d/1PpYLDlya7PLAvalIxgVi-B6isoFG7t9QLDxOZCdK6no/edit#slide=id.ga073618e60_0_16"
                href="https://docs.google.com/presentation/d/1PpYLDlya7PLAvalIxgVi-B6isoFG7t9QLDxOZCdK6no/edit?usp=sharing"
                className="Icon"
              >
                <div className="Icon">Presentation</div>
              </a>
            </div>
          </div>
          <div className="icons-flex Icon">
            <a href="https://www.behance.net/gallery/186855431/Golden-Age-of-Hollywood-Film-Festival-Web-Design?tracking_source=search_projects&l=0">
              <div className="Icon">
                <BrushIcon className="Icon" />
              </div>
            </a>
            <a href="https://github.com/lemon4974/YellowNBlue">
              <div className="Icon">
                <GitHubIcon className="Icon" />
              </div>
            </a>
          </div>
        </div>
        <div className="bottom-line Icon"></div>

        <div className="pj-timeline Icon">
          <TodayIcon className="Icon" style={{ height: '15px' }} />
          <span className="Icon">2023.12.11 - 2024.01.05</span>
        </div>
      </div>
    </footer>
  );
}
