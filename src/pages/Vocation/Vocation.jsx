import React from "react";
import "./Vocation.scss";
import { Link } from "react-router-dom";

const Vocation = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="vocation">
      <img src="/img/baba j.png" alt="" />
      <div className="desc">
        <div className="body">
          <p>
            Do you feel the beckon of God in your heart? Do you wish to help
            fulfill the promise of God to his children? Do you wish to live a
            wholistic and religious life?
          </p>
          <p>
            The Missionary sisters of the holy rosary, a global group dedicated,
            chaste, humble and serving sisters are here to help and guide you to
            realizing and fulfilling your vocation. It is God who calls us; we
            are all instruments in His hands and can respond in several ways,
            and one way is through the MSHR's way of life.{" "}
          </p>
          <p>
            Why choose us? <Link to="/about">Click here to find out</Link>. <br /> For detailed information about our
            vocation and formation processes, please call us on{" "}
            <a href="tel:+2347055159331">+234 705 515 9331</a>
            {", "}
            or visit our <Link to="/contact">contact page</Link> for more ways
            to get to us.
          </p>
        </div>
        <Link to="/vocation">
          <button>Join us now</button>
        </Link>
      </div>
    </div>
  );
};

export default Vocation;
