import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import axios from "axios";

import "../../styles/movieDetail/swipeableRecommendation.scss";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import SwipeableViews from "react-swipeable-views";

const itemsPerView = 2; // Number of items per view

export default function SwipeableMobileStepper({ movieId }) {
  // const { movieId } = useParams();

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const [images, setImages] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTgyNDhlY2NiZDUzNGNkYjAxNWY0MDhkNWMyMGUzOCIsInN1YiI6IjY1NjljM2ZmZWEzN2UwMDE0ZWQ2ZWI3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0cMyb46qJgcy9qYvXQCKqRfAW9yldC3HPy4YZizCVaM",
            },
          }
        );
        setImages(response.data.backdrops);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [movieId]);

  console.log(images);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const maxSteps = Math.ceil(images.length / 2);
  return (
    <div sx={{ maxWidth: 1200, flexGrow: 1 }}>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {[...Array(maxSteps)].map((_, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              gap: "10px",
            }}
          >
            {images
              .slice(index * itemsPerView, index * itemsPerView + itemsPerView)
              .map((image, imgIndex) => (
                <div style={{ width: "calc(50% - 5px)" }}>
                  <Box
                    key={imgIndex}
                    component="img"
                    className="image-hover-effect"
                    sx={{
                      height: 255,
                      display: "block",
                      maxWidth: 400,
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={`https://image.tmdb.org/t/p/original${image.file_path}`}
                    alt={`Image ${imgIndex}`}
                  />
                </div>
              ))}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          backgroundColor: "#fcf4e5", // Custom background color
          "& .MuiMobileStepper-dot": {
            backgroundColor: "#fcf4e5", // Color of inactive dots
            border: "1px solid black",
          },
          "& .MuiMobileStepper-dotActive": {
            backgroundColor: "#eb4d33", // Color of the active dot
            border: "1px solid #fcf4e5",
          },
          padding: "0",
          marginTop: "5px",
        }}
        nextButton={
          <div
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            className="carousel-next-prev"
          >
            Next
            {theme.direction === "rtl" ? <ArrowBack /> : <ArrowForward />}
          </div>
        }
        backButton={
          <div
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            className="carousel-next-prev"
          >
            {theme.direction === "rtl" ? <ArrowForward /> : <ArrowBack />}
            Back
          </div>
        }
      />
    </div>
  );
}
