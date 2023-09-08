import React, { useEffect, useState } from "react";
import "./Home.scss";
import Landing from "../Landing/Landing";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Vocation from "../Vocation/Vocation";
import Formation from "../Formation/Formation";
import Accordion from "../../components/Accordion/Accordion";
import axios from "axios";

const Home = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [faqs, setFaqs] = useState([]);
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
    const getFaqs = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(`faqs`, {
          headers: {
            token: `Bearer ${import.meta.env.VITE_REACT_APP_JWT_TOKEN}`,
          },
        });
        setFaqs(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    
    getCarouselImages();
    getFaqs();
  }, []);

  return isLoading ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="home">
      <Landing carouselImages={carouselImages} />
      <Vocation />
      <Formation />
      <Accordion sections={faqs} />
      <Contact />
      <Blog />
    </div>
  );
};

export default Home;
