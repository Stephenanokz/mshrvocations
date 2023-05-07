import React from "react";
import "./Donate.scss";
import Banner from "../../components/Banner/Banner";

const Donate = () => {
  return (
    <div className="donate">
      <Banner
        title="Support Us"
        subTitle='"Our God is a cheerful giver, and so should we be"'
      />
      <div data-aos="zoom-in" data-aos-duration="1000" className="donateContainer">
        <h2>
          How can I support the services of the Missionary Sisters of the Holy
          Rosary?
        </h2>
        <span>To be supplied by the CLT</span>
      </div>
    </div>
  );
};

export default Donate;
