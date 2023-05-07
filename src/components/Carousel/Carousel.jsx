import React, { useEffect, useState } from "react";
import "./Carousel.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex, slides]);

  const goToPrevious = (e) => {
    const isFirstLside = currentIndex === 0;
    const newIndex = isFirstLside ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (e) => {
    const isLastLside = currentIndex === slides.length - 1;
    const newIndex = isLastLside ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="leftArrow" onClick={goToPrevious}>
        <ArrowBackIosIcon className="icon" />
      </div>
      <div className="rightArrow" onClick={goToNext}>
        <ArrowForwardIosIcon className="icon" />
      </div>
      <div
        className="image"
        style={{ backgroundImage: `url(${slides[currentIndex]?.img})` }}
      >
        <div className="overlay">
          <div className="text">{slides[currentIndex]?.title}</div>
          <div className="subText">{slides[currentIndex]?.subtitle}</div>
          <div>
            <Link to="/about">
              <button className="aboutButton">About us</button>
            </Link>
            <Link to="/donate">
              <button className="contactButton">Support</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
