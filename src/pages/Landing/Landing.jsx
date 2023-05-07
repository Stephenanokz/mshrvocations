import React, { useEffect, useState } from "react";
import "./Landing.scss";
import Carousel from "../../components/Carousel/Carousel";
import axios from "axios";

const Landing = ({ carouselImages }) => {
  // const slides = [
  //   {
  //     url: "/img/a3ih9-nuelf.avif",
  //     title: "Welcome to Missionary Sisters of the Holy Rosary",
  //     subtitle: "Bringing God's light to everyone"
  //   },
  //   {
  //     url: "/img/a6hxf-u5ocg.avif",
  //     title: "Nigeria",
  //     subtitle: "Helping the helpless"
  //   },
  //   {
  //     url: "/img/a40jj-pvl86.avif",
  //     title: "Cameroon",
  //     subtitle: "The joy of the lord is our strength. Come and join us!"
  //   },
  //   {
  //     url: "/img/a599m-yzrbs.avif",
  //     title: "Ghana",
  //     subtitle: "Drawing strength for mission"
  //   },
  //   {
  //     url: "/img/avt18-9ab7x.avif",
  //     title: "Ethiopia",
  //     subtitle: "Repsonse to urgent needs - Supporting internally displaced people"
  //   },
  //   {
  //     url: "/img/azdhk-q1adb.avif",
  //     title: "Ireland",
  //     subtitle: "A Cross-section of our sisters in ireland"
  //   },
  //   {
  //     url: "/img/ad3xh-4mvyw.avif",
  //     title: "Kenya",
  //     subtitle: "There is joy in serving god"
  //   },
  // ];

  return (
    <div className="landing" id="landing">
      <div className="container">
        <Carousel slides={carouselImages} />
      </div>
    </div>
  );
};

export default Landing;
