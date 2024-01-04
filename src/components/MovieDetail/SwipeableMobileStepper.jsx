import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useParams } from "react-router-dom";
import axios from 'axios';

import '../../styles/movieDetail/swipeableRecommendation.scss';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import SwipeableViews from 'react-swipeable-views';
import Loading from '../Loading';

// const itemsPerView = 2; // Number of items per view

export default function SwipeableMobileStepper({ movieId }) {
  // const { movieId } = useParams();

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const [images, setImages] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //이미지 캐러셀 반응형 - 스크린 크기에 따른 한 view당 item 수 변화
  const [itemsPerView, setItemsPerView] = useState(2);

  useEffect(() => {
    const updateItemsPerView = () => {
      const newItemsPerView = window.innerWidth < 650 ? 1 : 2;
      setItemsPerView(newItemsPerView);
    };

    window.addEventListener('resize', updateItemsPerView);
    updateItemsPerView(); // Initial check on component mount

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateItemsPerView);
    };
  }, []);
  //이미지 캐러셀 반응형 끝

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  useEffect(() => {
    const fetchImages = async () => {
      // console.log("movieId", movieId);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/images`,
          {
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
            },
          }
        );
        setImages(response.data.backdrops);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [movieId]);

  // console.log(images);
  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  // const maxSteps = Math.ceil(images.length / 2);

  const maxSteps = images ? Math.ceil(images.length / itemsPerView) : 0;
  return (
    <div sx={{ maxWidth: 1200, flexGrow: 1 }}>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {[...Array(maxSteps)].map((_, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              gap: '10px',
            }}
          >
            {images
              .slice(index * itemsPerView, index * itemsPerView + itemsPerView)
              .map((image, imgIndex) => (
                <div
                  style={{
                    width: itemsPerView === 1 ? '100%' : 'calc(50% - 5px)',
                  }}
                >
                  <Box
                    key={imgIndex}
                    component="img"
                    className="image-hover-effect"
                    sx={{
                      height: '100%',
                      display: 'block',
                      // maxWidth: 400,
                      overflow: 'hidden',
                      width: '100%',
                    }}
                    src={`https://image.tmdb.org/t/p/original${image.file_path}`}
                    alt={`Image ${imgIndex}`}
                  />
                </div>
              ))}
          </div>
        ))}
      </SwipeableViews>
      {images && images.length > 0 && (
        <MobileStepper
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{
            backgroundColor: '#fcf4e5',
            '& .MuiMobileStepper-dot': {
              backgroundColor: '#fcf4e5',
              border: '1px solid black',
            },
            '& .MuiMobileStepper-dotActive': {
              backgroundColor: '#eb4d33',
              border: '1px solid #fcf4e5',
            },
            padding: '0',
            marginTop: '5px',
          }}
          nextButton={
            activeStep < maxSteps - 1 ? (
              <div
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
                className="carousel-next-prev"
              >
                Next
                {theme.direction === 'rtl' ? <ArrowBack /> : <ArrowForward />}
              </div>
            ) : (
              <div></div>
            )
          }
          backButton={
            activeStep > 0 ? (
              <div
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
                className="carousel-next-prev"
              >
                {theme.direction === 'rtl' ? <ArrowForward /> : <ArrowBack />}
                Back
              </div>
            ) : (
              <div></div>
            )
          }
        />
      )}
    </div>
  );
}
