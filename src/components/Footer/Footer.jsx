import React, { useEffect, useState } from "react";
import "./Footer.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TikTokIcon from "../../components/TikTokIcon";
import { Link } from "react-router-dom";
import NewsTicker from "../NewsTicker/NewsTicker";
import axios from "axios";

const Footer = () => {
  // const founderQuotes = [
  //   {
  //     id: 1,
  //     text: "I will never ask our Lord to take suffering away from you - that would be against our very vocation as apostles, but I will ever beseech with every increasing intensity of prayer, beseech Christ at the intercession of our blessed mother, to grant you an ever more felt sense of God's presence.",
  //   },
  //   {
  //     id: 2,
  //     text: "There is a divine artist in each soul forming it and purifying it until  finally it becomes assimilated with christ Himself.",
  //   },
  //   {
  //     id: 3,
  //     text: "The Catholic Sister is... to express in her own person, in her life, her thoughts, her actions... the woman who has Our Lord and His Blessed Mother for models of her own divinized womanhood.",
  //   },
  //   {
  //     id: 4,
  //     text: "Night and day I have been thinking of you and begging God to grant you hope and fortitude to trust in Providence even beyond all possible limits. ",
  //   },
  //   {
  //     id: 5,
  //     text: "During the years of my missionary life in Africa one of the greatest consolations was the vision of God at work in a human being. He alone being God can fashion a loving spirit into the living, loving image of His Own Living, Loving Divine Self.",
  //   },
  //   {
  //     id: 6,
  //     text: "Is it not extraordinary how holy Providence arranges things for us as only the most tender and loving of fathers and mothers could do for those they love and this is only  the shadow of the tenderness of heart God has for each of us.",
  //   },
  // ];

  // const quotes = [
  //   "Is it not extraordinary how holy Providence arranges things for us as only the most tender and loving of fathers and mothers could do for those they love and this is only  the shadow of the tenderness of heart God has for each of us.",
  //   "The Catholic Sister is... to express in her own person, in her life, her thoughts, her actions... the woman who has Our Lord and His Blessed Mother for models of her own divinized womanhood.",
  //   "There is a divine artist in each soul forming it and purifying it until  finally it becomes assimilated with christ Himself.",
  //   "I will never ask our Lord to take suffering away from you - that would be against our very vocation as apostles, but I will ever beseech with every increasing intensity of prayer, beseech Christ at the intercession of our blessed mother, to grant you an ever more felt sense of God's presence.",
  //   "Night and day I have been thinking of you and begging God to grant you hope and fortitude to trust in Providence even beyond all possible limits. ",
  //   "During the years of my missionary life in Africa one of the greatest consolations was the vision of God at work in a human being. He alone being God can fashion a loving spirit into the living, loving image of His Own Living, Loving Divine Self.",
  // ];

  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_BASEURL,
  });

  useEffect(() => {
    const getQuotes = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(`quotes`, {
          headers: {
            token: `Bearer ${import.meta.env.VITE_REACT_APP_JWT_TOKEN}`,
          },
        });
        setQuotes(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getQuotes();
  }, []);

  return (
    <>
      {/* <marquee behavior="scroll" direction="left">
        <div>
          {founderQuotes.map((quote) => (
            <p key={quote.id}>" {quote.text} "</p>
          ))}
        </div>
      </marquee> */}
      <NewsTicker news={quotes} />
      <div className="footer">
        <div className="top">
          {/* <div className="links">
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="/about">
              <span>About</span>
            </Link>
            <Link to="/vocation">
              <span>Vocation</span>
            </Link>
            <Link to="/formation">
              <span>Formation</span>
            </Link>
            <Link to="/apostolates">
              <span>Apostolates</span>
            </Link>
            <Link to="/gallery">
              <span>Gallery</span>
            </Link>
            <Link to="/blog">
              <span>News & Events</span>
            </Link>
            <Link to="/contact">
              <span>Contact Us</span>
            </Link>
          </div> */}
          <div className="featured">
            <div className="featItem">
              <img
                src="https://ik.imagekit.io/stephenanokz98/o/imgs%2FLOGO1.png?alt=media&token=7e16973d-39e2-462e-9f90-1a3404424520"
                alt=""
              />
              <a target="_blank" href="https://www.mshr.org/">
                MSHR Main Website
              </a>
            </div>
            <div className="featItem">
              <img
                src="https://ik.imagekit.io/stephenanokz98/o/imgs%2F0C486E05-C51D-4252-AE14-EF724144D32C.png?alt=media&token=d0dd24e7-96a0-4b30-b8a9-88bb0207d7e3&_gl=1*1xhkusx*_ga*MTQ2ODI0NTE2MC4xNjY2NjE0NjY3*_ga_CW55HF8NVT*MTY5Njk0MjE3Ni40NC4xLjE2OTY5NDIzODkuMTIuMC4w"
                alt=""
              />
              <a target="_blank" href="https://www.naechstenliebe-weltweit.org/">
              NÄCHSTENLIEBE WELTWEIT
              </a>
            </div>
            <div className="featItem">
              <img
                src="https://ik.imagekit.io/stephenanokz98/o/imgs%2Fvatican.png?alt=media&token=cf1b7c67-8576-40fa-8838-200cf30719ae"
                alt=""
              />
              <a target="_blank" href="https://www.vatican.va/">Vatican Website</a>
            </div>
            <div className="featItem">
              <img
                src="https://ik.imagekit.io/stephenanokz98/o/imgs%2Fewtn.png?alt=media&token=f56c17ee-c34c-486a-b9b9-2181d38f51b3"
                alt=""
              />
              <a target="_blank" href="https://www.ewtn.com/">
                EWTN Global Catholic Network
              </a>
            </div>
            <div className="featItem">
              <img
                src="https://ik.imagekit.io/stephenanokz98/o/imgs%2Funiversalis.png?alt=media&token=088556ea-4fb8-4680-92a6-b5e2eb870fd5"
                alt=""
              />
              <a target="_blank" href="https://www.universalis.com/today.htm">
                Daily Readings and Office
              </a>
            </div>
            <div className="featItem">
              <img
                src="https://ik.imagekit.io/stephenanokz98/o/imgs%2Fcnsn.png?alt=media&token=1dde8aaf-87aa-43be-90ef-d0df74d63ece"
                alt=""
              />
              <a target="_blank" href="https://www.cnsng.org/">
                Catholic News Service of Nigeria
              </a>
            </div>
          </div>
          {/* <div className="support">
            <h3>Support Us</h3>
            <span>Help Us Change the Lives of People around the World</span>
            <Link to="/donate">
              <button>Donate</button>
            </Link>
          </div> */}
        </div>
        <div className="bottom">
          <div className="info">
            <div className="logo">
              <span className="title">
                The Missionary of Sisters of the Holy Rosary
              </span>
              <img
                src="https://ik.imagekit.io/stephenanokz98/o/imgs%2FLOGO1.png?alt=media&token=7e16973d-39e2-462e-9f90-1a3404424520"
                alt=""
              />
            </div>
            <div className="footerContact">
              <span>
                P. 0. Box 9677, Independence Layout, Enugu | +234 705 5159 331 |
                holyrosaryvocations99@gmail.com{" "}
              </span>
            </div>
          </div>
          <div className="socials">
            <Link to="https://web.facebook.com/profile.php?id=100068013310714">
              <span>
                <FacebookOutlinedIcon className="icon" />
              </span>
            </Link>
            <Link to="https://www.instagram.com/holyrosarysistersvocationpage/">
              <span>
                <InstagramIcon className="icon" />
              </span>
            </Link>
            {/* <Link to="https://www.linkedin.com/in/holy-rosary-sisters-a3837826a/">
              <span>
                <LinkedInIcon className="icon" />
              </span>
            </Link>
            <Link to="https://twitter.com/holyrosary1924">
              <span>
                <TwitterIcon className="icon" />
              </span>
            </Link>
            <Link to="https://www.tiktok.com/@holyrosary99">
              <span>
                <TikTokIcon color="#8a191f" className="icon" />
              </span>
            </Link> */}
            <Link to="https://wa.me/2347055159331">
              <span>
                <WhatsAppIcon className="icon" />
              </span>
            </Link>
            <Link to="https://www.youtube.com/@missionarysistersoftheholy4589">
              <span>
                <YouTubeIcon className="icon" />
              </span>
            </Link>
          </div>
          <div className="copyright">
            <span>
              <a href="https://admin.mshrvocations.org/" target="_blank">©</a> 2023
              Sisters of the Holy Rosary Province of Nigeria
            </span>
            <span>Developed by Verbum Networks, Enugu.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
