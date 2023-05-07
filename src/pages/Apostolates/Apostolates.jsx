import React, { useEffect, useState } from "react";
import "./Apostolates.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const Apostolates = () => {
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

  const filteredApostolateTypes = apostolateTypes.slice(0, 3);

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="apostolates" id="apostolates">
      <div data-aos="fade-down" data-aos-duration="1000" className="top">
        <span className="title">Our Apostolates</span>
        <span className="subTitle">Some of our Apostolates</span>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" className="bottom">
        <div className="apostolatesContainer">
          {isLoading
            ? "Loading"
            : filteredApostolateTypes?.map((apostolate) => (
                <Link key={apostolate?._id} to={`/apostolate/${apostolate?._id}`}>
                  <div className="apostolatesItem">
                    <div className="top">
                      <img src={apostolate?.img} alt="" />
                    </div>
                    <div className="bottom">
                      <span>{apostolate?.title}</span>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
        <Link to="/apostolates">
          <button>View All Apostolates</button>
        </Link>
      </div>
    </div>
  );
};

export default Apostolates;
