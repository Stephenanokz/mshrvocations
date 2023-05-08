import React, { useEffect, useState } from "react";
import "./Home.scss";
import Landing from "../Landing/Landing";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Apostolates from "../Apostolates/Apostolates";
import Vocation from "../Vocation/Vocation";
import Formation from "../Formation/Formation";
import axios from "axios";

const Home = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_BASEURL,
  });

  useEffect(() => {
    //Fetch Carousel Images
    const getCarouselImages = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("carouselimages", {
          headers: {
            token: `Bearer ${import.meta.env.VITE_REACT_APP_JWT_TOKEN}`,
          },
        });
        setCarouselImages(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getCarouselImages();
  }, []);

  return isLoading ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="home">
      <Landing carouselImages={carouselImages} />
      <About />
      <Vocation />
      <Formation />
      <Apostolates />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
