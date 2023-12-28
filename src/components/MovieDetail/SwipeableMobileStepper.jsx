import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";

const itemsPerView = 2; // Number of items per view

export default function SwipeableMobileStepper({ movieId }) {
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
            }}
          >
            {images
              .slice(index * itemsPerView, index * itemsPerView + itemsPerView)
              .map((image, imgIndex) => (
                <Box
                  key={imgIndex}
                  component="img"
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
        }}
        nextButton={
          <div
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            style={{ color: "#eb4d33" }}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </div>
        }
        backButton={
          <div
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            style={{ color: "#eb4d33" }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </div>
        }
      />
    </div>
  );
}
