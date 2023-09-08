import React, { useEffect, useState } from "react";
import "./VocationInfo.scss";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import Video from "../../components/Video/Video";
import axios from "axios";

const VocationInfo = () => {
  const [vocationVideos, setVocationVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_BASEURL,
  });

  useEffect(() => {
    const getVocationVideos = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(`vocationVideos`, {
          headers: {
            token: `Bearer ${import.meta.env.VITE_REACT_APP_JWT_TOKEN}`,
          },
        });
        setVocationVideos(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getVocationVideos();
  }, []);

  return (
    <div className="VocationInfo">
      <Banner
        title="Vocation"
        subTitle='"Here I am Lord, I come to do your will"'
      />
      <div className="vocationContainer">
        <div className="top">
          <div data-aos="fade-up" data-aos-duration="1000" className="info">
            <img
              src="https://ik.imagekit.io/stephenanokz98/o/imgs%2Fafnku-x1g5b.avif?alt=media&token=cadbbc69-b557-4884-a027-1791b304ecbb"
              alt=""
            />
            <p>
              We are the Missionary Sisters of the holy Rosary, an international
              and inter-cultural congregation of women founded in 1924 by an
              Irish bishop, Joseph Shanahan Cssp.
            </p>
            <p>
              We are dedicated to all kinds of work; which uplifts the dignity
              of the human person created in the image and likeness of God. More
              specifically, our Apostolates amongst others include: Medical,
              Education, Social, Youth Development, Gender Awareness, Pastoral,
              Working with Refugees and People living with HIV
            </p>
            <Link to="/formation">Click to see the steps to discernment</Link>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="requirements"
          >
            <h3>Our Requirements</h3>
            <p>
              Age 18-25 years for WASSC holders and 18-30 years for graduates;
              degree holders, NCE, Nurses, etc. A minimum of five credits
              including English and Mathematics is required.
            </p>
            <Link to="/contact">
              <button>Reach Out</button>
            </Link>
          </div>
        </div>
        <div className="bottom">
          <div data-aos="fade-down" data-aos-duration="1000" className="title">
            <h2>Vocation Stories</h2>
            <span></span>
          </div>
          {isLoading ? (
            <div className="loading__inline">Loading...</div>
          ) : (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="videoList"
            >
              {vocationVideos.map((video) => (
                <div key={video?._id} className="videoItem">
                  <Video videoSrc={video?.video} />
                  <span>{video?.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VocationInfo;
