import React, { useEffect, useState } from "react";
import "./Apostolate.scss";
import Banner from "../../components/Banner/Banner";
import { useParams } from "react-router-dom";
import axios from "axios";
import ListItem from "../../components/ListItem";

const Apostolate = () => {
  const params = useParams();
  const [apostolateType, setApostolateType] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_BASEURL,
  });

  useEffect(() => {
    const getApostolateType = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(
          `apostolatetypes/find/${params.apostolateId}`,
          {
            headers: {
              token: `Bearer ${import.meta.env.VITE_REACT_APP_JWT_TOKEN}`,
            },
          }
        );
        setApostolateType(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getApostolateType();
  }, []);

  return (
    <div className="Apostolate">
      <Banner title="Our Apostolates" />
      {isLoading ? (
        <div className="loading__inline">Loading...</div>
      ) : (
        <div className="apostolateContainer">
          <h2 className="title">{apostolateType.title} Apostolate</h2>
          <img src={apostolateType.img} alt="apostolate" />
          <div className="desc">
            <p>{apostolateType.desc}</p>
            {apostolateType?.apostolates?.length > 0 ? (
              <>
                <p>Here is a list of our {apostolateType.title} apostolates</p>
                <ul className="apoList">
                  {apostolateType?.apostolates?.map((apostolate, i) => (
                    <ListItem key={apostolate} index={i} item={apostolate} />
                  ))}
                </ul>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Apostolate;
