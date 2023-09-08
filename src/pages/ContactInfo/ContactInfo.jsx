import React, { useEffect, useState } from "react";
import "./ContactInfo.scss";
import Banner from "../../components/Banner/Banner";
import Accordion from "../../components/Accordion/Accordion";
import axios from "axios";
// import EmailIcon from "@mui/icons-material/Email";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import CallIcon from "@mui/icons-material/Call";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import TikTokIcon from "../../components/TikTokIcon";
// import GeocodeGlobe from "../../components/GeocodeGlobe/GeocodeGlobe";

const ContactInfo = () => {
  
  const [faqs, setFaqs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_BASEURL,
  });

  useEffect(() => {
    const getFaqs = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(`faqs`, {
          headers: {
            token: `Bearer ${import.meta.env.VITE_REACT_APP_JWT_TOKEN}`,
          },
        });
        setFaqs(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getFaqs();
  }, []);

  // const faqs = [
  //   {
  //     title: "Question 1",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consectetur ipsam perferendis. Hic laboriosam ex odit soluta officia, debitis, natus aliquid doloremque veniam, repellat earum? Animi voluptate id distinctio obcaecati.",
  //   },
  //   {
  //     title: "Question 2",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consectetur ipsam perferendis. Hic laboriosam ex odit soluta officia, debitis, natus aliquid doloremque veniam, repellat earum? Animi voluptate id distinctio obcaecati.",
  //   },
  //   {
  //     title: "Question 3",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consectetur ipsam perferendis. Hic laboriosam ex odit soluta officia, debitis, natus aliquid doloremque veniam, repellat earum? Animi voluptate id distinctio obcaecati.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consectetur ipsam perferendis. Hic laboriosam ex odit soluta officia, debitis, natus aliquid doloremque veniam, repellat earum? Animi voluptate id distinctio obcaecati. . Hic laboriosam ex odit soluta officia, debitis, natus aliquid doloremque veniam, repellat earum?",
  //   },
  //   {
  //     title: "Question 4",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consectetur ipsam perferendis. Hic laboriosam ex odit soluta officia, debitis, natus aliquid doloremque veniam, repellat earum? Animi voluptate id distinctio obcaecati. . Hic laboriosam ex odit soluta officia, debitis, natus aliquid doloremque veniam, repellat earum?",
  //   },
  // ];

  const location = {
    address: "Verbum Networks, Zik Avenue, Enugu",
    lat: 6.42663,
    lng: 7.49207,
  };

  return (
    <div className="ContactInfo">
      <Banner
        title="Contact Us"
        subTitle="For enquiries and more information about us, please reach out to us"
      />
      <div className="contactContainer">
        <div className="location">
          <div data-aos="fade-down" data-aos-duration="1000" className="title">
            <h2>Where Are We?</h2>
            <span>We are represented in 14 countries across the globe.</span>
          </div>
          <div className="list">
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="clItem africa"
            >
              <div>
                <span>Cameroon</span>
                <span>Ethiopia</span>
                <span>Ghana</span>
              </div>
              <div>
                <span>Kenya</span>
                <span>Liberia</span>
                <span>Nigeria</span>
              </div>
              <div>
                <span>Sierra Leone</span>
                <span>South Africa</span>
                <span>Zambia</span>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="clItem europe"
            >
              <span>England</span>
              <span>Ireland</span>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="clItem america"
            >
              <span>Brazil</span>
              <span>Mexico</span>
              <span>The USA</span>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="regionContact"
          >
            <div className="left">
              <span>
                <strong>BENUE:</strong>{" "}
                <a href="tel:+2348165095030">+234 816 509 5030</a>
              </span>
              <span>
                <strong>BRAZIL:</strong>{" "}
                <a href="tel:+557598238645">+55 (75) 9823-8645</a>
              </span>
              <span>
                <strong>CAMEROON:</strong>{" "}
                <a href="tel:+237653521185">+237 6 53 52 11 85</a>
              </span>
              <span>
                <strong>ETHIOPIA:</strong>{" "}
                <a href="tel:+251912057189">+251 91 205 7189</a>
              </span>
              <span>
                <strong>GHANA:</strong>{" "}
                <a href="tel:+233549536835">+233 54 953 6835</a>
              </span>
            </div>
            <div className="right">
              <span>
                <strong>KENYA:</strong>{" "}
                <a href="tel:+254790566646">+254 790 566 646</a>
              </span>
              <span>
                <strong>LIBERIA:</strong>{" "}
                <a href="tel:+231777818348">+231 7778 18348</a>
              </span>
              <span>
                <strong>SIERRA LEON:</strong>{" "}
                <a href="tel:+23278585450">+232 78 58 54 50</a>
              </span>
              <span>
                <strong>SOUTHERN NIGERIA:</strong>{" "}
                <a href="tel:+2347055159331">+234 705 515 9331</a>
              </span>
              <span>
                <strong>ZAMBIA:</strong>{" "}
                <a href="tel:+260976162022">+260 97 6162022</a>
              </span>
            </div>
          </div>
        </div>
        {/* <h2 data-aos="fade-down" data-aos-duration="1000">
          Our Contact Handles
        </h2> */}
        {/* <div className="contactList">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="contactItem"
          >
            <EmailIcon className="contactIcon" />
            <h3>Email</h3>
            <span>
              You can send a mail to our 24/7 support team and you will get a
              feedback from us.
            </span>
            <a href="mailto:holyrosaryvocations99@gmail.com?subject = Feedback&body = Message">
              <button>Send mail</button>
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="contactItem"
          >
            <TwitterIcon className="contactIcon" />
            <h3>Twitter</h3>
            <span>
              Visit our Twitter page{" "}
              <a target="_blank" href="https://twitter.com/holyrosary1924">
                @holyrosary1924
              </a>{" "}
              to stay updated on services and promos going on. You can also tag
              us, @verbumAcademy, in your tweet using the button below.
            </span>
            <a href="https://twitter.com/intent/tweet">
              <button>Tweet</button>
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="contactItem"
          >
            <FacebookIcon className="contactIcon" />
            <h3>Facebook</h3>
            <span>
              Our facebook handle is{" "}
              <em>
                <strong>Missionary Sisters of the Holy Rosary</strong>
              </em>
              .
            </span>
            <a
              target="_blank"
              href="https://web.facebook.com/profile.php?id=100068013310714"
            >
              <button>View Profile</button>
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="contactItem"
          >
            <WhatsAppIcon className="contactIcon" />
            <h3>WhatsApp</h3>
            <span>
              Send us a chat on WhatsApp and we'll reply you as soon as we can.
            </span>
            <a href="https://wa.me/2347055159331">
              <button>Chat</button>
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="contactItem"
          >
            <InstagramIcon className="contactIcon" />
            <h3>Instagram</h3>
            <span>
              You can check out our Insta Page and follow our glorious journey
              with the Lord.
            </span>
            <a
              target="_blank"
              href="https://www.instagram.com/holyrosarysistersvocationpage/"
            >
              <button>View IG Page</button>
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="contactItem"
          >
            <TikTokIcon color="white" className="contactIcon" />
            <h3>TikTok</h3>
            <span>Follow us, Watch and share our amazing contents .</span>
            <a target="_blank" href="https://www.tiktok.com/@holyrosary99">
              <button>Go to Profile</button>
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="contactItem"
          >
            <LinkedInIcon className="contactIcon" />
            <h3>LinkedIn</h3>
            <span>Be sure to connect with us via our Linkedin profile.</span>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/holy-rosary-sisters-a3837826a/"
            >
              <button>Go to Profile</button>
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="contactItem"
          >
            <YouTubeIcon className="contactIcon" />
            <h3>YouTube</h3>
            <span>
              You can check out our YouTube channel and see some of our events
              and school content.
            </span>
            <a
              target="_blank"
              href="https://www.youtube.com/@missionarysistersoftheholy4589"
            >
              <button>Visit Channel</button>
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="contactItem phone"
          >
            <CallIcon className="contactIcon" />
            <h3>Telephone</h3>
            <span>
              You can also give us a call on any of our customer lines: <br />{" "}
              <a href="tel:+2347055159331">+234 705 515 9331</a> <br />{" "}
              <a href="tel:+2347039867948">+234 703 986 7948</a> <br />{" "}
              <a href="tel:+2348165095030">+234 816 509 5030</a> <br />{" "}
              <a href="tel:+2347037102113">+234 703 710 2113</a> <br />{" "}
            </span>
          </div>
        </div> */}
        {/* <GeocodeGlobe /> */}
        <Accordion sections={faqs} />
        <div data-aos="fade-up" data-aos-duration="1000" className="form">
          <form className="contactForm">
            <h2 className="contactFormTitle">Get in touch</h2>
            <input
              name="from_name"
              type="text"
              placeholder="Full Name"
              className="contactFormInput"
            />
            <input
              name="from_email"
              type="email"
              placeholder="Email"
              className="contactFormInput"
            />
            <textarea
              name="message"
              id="body"
              cols="30"
              rows="10"
              placeholder="Your Message"
              className="contactFormTextArea"
            ></textarea>
            <button className="contactFormButton">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
