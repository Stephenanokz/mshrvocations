import React from "react";
import "./Vocation.scss";
import { Link } from "react-router-dom";

const Vocation = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="vocation">
      <img src="/img/vocall.png" alt="" />
      <Link to="/vocation">
        <button>Join us now</button>
      </Link>
    </div>
  );
};

export default Vocation;
