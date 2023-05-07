import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListItem = ({ item, index }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apost, setApost] = useState(null);
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_BASEURL,
  });

  useEffect(() => {
    const getApostolate = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(`apostolates/find/${item}`, {
          headers: {
            token: `Bearer ${import.meta.env.VITE_REACT_APP_JWT_TOKEN}`,
          },
        });
        setApost(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getApostolate();
  }, [item]);

  return isLoading ? (
    "Loading..."
  ) : apost?.url ? (
    <Link to={apost?.url}>
      <li className="apoItem">{apost?.name}</li>
    </Link>
  ) : (
    <li className="apoItem">{apost?.name}</li>
  );
};

export default ListItem;
