import React from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="contact" id="contact">
      <div data-aos="fade-down" data-aos-duration="1000" className="contactTitle">
        <span className="title">Contact Us</span>
        <span className="subTitle">
          For enquiries and more information about us, please reach out to us
        </span>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" className="form">
        <form>
          <span className="title">Get in touch</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
      <div className="map">
      </div>
      <Link to="/contact">
        <button>More ways to contact us</button>
      </Link>
    </div>
  );
};

export default Contact;
