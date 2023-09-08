import React from "react";
import "./Formation.scss";
import { Link } from "react-router-dom";

const Formation = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="formation">
      <div data-aos="fade-down" data-aos-duration="1000" className="top">
        <span className="title">Formation</span>
        <span className="subTitle">
          Here are the steps you’ll be invited to embark on
        </span>
      </div>
      <div className="bottom">
        <div className="imageContainer" data-aos="fade-right" data-aos-duration="1000">
          <h3>Aspirancy</h3>
          <img
            src="https://ik.imagekit.io/stephenanokz98/o/imgs%2Fayvgd-t0byv.avif?alt=media&token=37861741-100c-4eb9-86f6-452531d55888"
            alt="aspirants"
          />
        </div>
        <div data-aos="fade-left" data-aos-duration="1000">
          <p>
            This is the stage of invitation and contact with interested young
            women, who has some sense of being called by God to missionary life
            among the poor, to ...
          </p>
          <Link to="/formation">
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Formation;
