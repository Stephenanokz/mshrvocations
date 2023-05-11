import React from "react";
import { Link } from "react-router-dom";
import "./About.scss";

const About = () => {
  return (
    <div className="about" id="about">
      {/* <div className="bottom">
        <div className="left">
          <img
            src="/img/Bishop-Joseph-Shanahan1.png"
            alt=""
            className="founder"
          />
        </div>
        <div className="right">
          <img src="/img/slogo.png" alt="" className="emblem" />
        </div>
      </div> */}
      <div className="top">
        <div data-aos="fade-up" data-aos-duration="1000" className="left">
          <div className="title">
            <span className="welcome">Welcome</span>
            <span className="rule"></span>
          </div>
          <div className="body">
            <p>
              On behalf of the Missionary Sisters of the Holy Rosary, worldwide,
              I warmly welcome you to our website.
            </p>
            <p>
              Our mission is to joyfully go beyond our boundaries and boarders
              to live in intercultural communities that make God's love visible
              to the most vulnerable and to all of creation. I am happy you are
              spending this time to get to know us.
            </p>
            <p>
              If you wish, you may consider one of the ways to partner with us
              on mission.
            </p>
            <p>WELCOME! Enjoy your time with us!</p>
            <div className="sign">
              <p className="name">Sr. Franca Onyibor,</p>
              <p className="title">Congregational Leader</p>
            </div>
            <Link to="/about">
              <button className="aboutMore">More About Us</button>
            </Link>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="right">
          <img
            src="https://ik.imagekit.io/stephenanokz98/o/imgs%2Fad28l-9suyc.avif?alt=media&token=49644667-6d4f-4ddd-ab7c-47f35b30ac8b"
            alt="congregational leader"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
