import React, { useEffect, useState } from "react";
import "./ApostolatesInfo.scss";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import axios from "axios";

const ApostolatesInfo = () => {
  const [apostolateTypes, setApostolateTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_BASEURL,
  });

  useEffect(() => {
    const getApostolateTypes = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(`apostolatetypes`, {
          headers: {
            token: `Bearer ${import.meta.env.VITE_REACT_APP_JWT_TOKEN}`,
          },
        });
        setApostolateTypes(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getApostolateTypes();
  }, []);

  const truncateString = (string = "", maxLength = 50) =>
    string.length > maxLength ? `${string.substring(0, maxLength)} …` : string;

  return (
    <div className="ApostolatesInfo">
      <Banner
        title="Our Apostolates"
        subTitle="We engage in diverse services in different works of life"
      />
      {isLoading ? (
        <div className="loading__inline">Loading...</div>
      ) : (
        <div className="apostolatesContainer">
          <h2
            data-aos="fade-down"
            data-aos-duration="1000"
            className="apostolatesTitle"
          >
            List of All Our Apostolates
          </h2>
          <div className="apostolatesList">
            {apostolateTypes?.map((apostolate) => (
              <Link
                data-aos="fade-up"
                data-aos-duration="1000"
                key={apostolate?._id}
                to={`/apostolate/${apostolate?._id}`}
              >
                <div className="apostolatesItem">
                  <div className="top">
                    <img src={apostolate?.img} alt="" />
                  </div>
                  <div className="bottom">
                    <span>{apostolate?.title}</span>
                    <p>{truncateString(apostolate?.desc, 200)}</p>
                    <button className="aposMore">Read More</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ApostolatesInfo;
