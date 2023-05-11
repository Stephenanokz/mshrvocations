import React from "react";
import "./Vocation.scss";
import { Link } from "react-router-dom";

const Vocation = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="vocation">
      <img src="https://ik.imagekit.io/stephenanokz98/o/imgs%2Fvocall.png?alt=media&token=f90816d6-6d25-4b7a-b7ab-0012469b40f0" alt="" />
      <Link to="/vocation">
        <button>Join us now</button>
      </Link>
    </div>
  );
};

export default Vocation;
