import React from "react";
import "./AboutInfo.scss";
import Banner from "../../components/Banner/Banner";
import About from "../About/About";
import { Link } from "react-router-dom";

const AboutInfo = () => {
  return (
    <div className="AboutInfo">
      <Banner title="About Us" subTitle="Learn Much More About us" />
      <About />
      <div className="aboutContainer">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="aboutInfoItem founder"
        >
          <div data-aos="fade-down" data-aos-duration="1000" className="title">
            <span>Our Founder</span>
          </div>
          <div className="content">
            <div className="left">
              <div className="image">
                <img
                  src="https://ik.imagekit.io/stephenanokz98/o/imgs%2Fav7vq-rmio9.avif?alt=media&token=5d3c996e-2b9a-4452-9d55-288ba122aa3d"
                  alt=""
                  className="mobile"
                />
                <img
                  src="https://ik.imagekit.io/stephenanokz98/o/imgs%2Fa268y-ppobi.avif?alt=media&token=44c88571-ac90-4b60-a2a5-131ea84210ff"
                  alt=""
                  className="desktop"
                />
              </div>
              <div className="body">
                <span>Bishop Joseph Shanahan, C.S.Sp</span>
              </div>
            </div>
            <div className="right">
              <div className="textContent">
                <p>
                  Joseph Shanahan B.Sc., C.S.Sp. (1871–1943) was an Irish-born
                  priest of the Congregation of the Holy Spirit (Spiritans), who
                  served as a bishop in Nigeria – first as prefect apostolic of
                  Lower Niger (now Onitsha) and then as vicar apostolic of
                  Southern Nigeria.
                </p>
                <p>
                  In 1924 Bishop Shanahan founded a missionary society for
                  women, the Missionary Sisters of the Holy Rosary, in
                  Killeshandra, County Cavan, Ireland...
                </p>
              </div>
              <Link to="/about/founder">
                <button>More About Our Founder</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="aboutInfoItem wwa"
        >
          <div data-aos="fade-down" data-aos-duration="1000" className="title">
            <span>Who We Are</span>
          </div>
          <div className="content">
            <div className="image">
              <img
                src="https://ik.imagekit.io/stephenanokz98/o/imgs%2Fa40jj-pvl86.avif?alt=media&token=5106ad4b-53ef-4851-bd2b-9d28d9e27d72"
                alt=""
              />
              <span>Some of our holy rosary sisters</span>
            </div>
            <div className="body">
              <p>
                We are Missionary Sisters of the Holy Rosary. An International
                and Inter-cultural congregation of women founded in 1924 by an
                Irish Bishop, Joseph Shanahan Cssp.
              </p>
              <p>
                We are dedicated to all kinds of work; which uplifts the dignity
                of the human person created in the image and likeness of God.
              </p>
              <p>
                More specifically, our apostolates among others include:
                Medical, Education, Social, Youth Development, Gender awareness,
                Pastoral, working with refugees and people living with HIV.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="aboutInfoItem mission"
        >
          <div data-aos="fade-down" data-aos-duration="1000" className="title">
            <span>Our Mission</span>
          </div>
          <div className="content">
            <div className="image">
              <img
                src="https://ik.imagekit.io/stephenanokz98/o/imgs%2Favt18-9ab7x.avif?alt=media&token=f7b96b81-eb81-4ccb-91ce-86cbfddcac65"
                alt=""
              />
              <span>Our community outreach/response program</span>
            </div>
            <div className="body">
              <p>
                The Missionary Sisters of the Holy Rosary collaborate with
                others to share Christ’s mission of love and reconciliation as
                we go beyond the boundaries of our cultures and countries so
                that all people especially the most vulnerable and those who are
                different have equitable resources for dignified life and for
                God’s Creation to thrive.{" "}
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="aboutInfoItem vision"
        >
          <div data-aos="fade-down" data-aos-duration="1000" className="title">
            <span>Our Vision</span>
          </div>
          <div className="content">
            <div className="image">
              <img
                src="https://ik.imagekit.io/stephenanokz98/o/imgs%2F14CCC.JPG?alt=media&token=6e085768-4fb2-425a-b88c-23f1b67e1767"
                alt=""
              />
              <span>Some of our young sisters</span>
            </div>
            <div className="body">
              <p>
                That all people live in love, peace and justice, embracing the
                richness in diversity and in our vulnerability, with abundant
                resources for life in union with God, one another and all
                creation.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="aboutInfoItem charism"
        >
          <div data-aos="fade-down" data-aos-duration="1000" className="title">
            <span>Charism</span>
          </div>
          <div className="content">
            <div className="image">
              <img
                src="https://ik.imagekit.io/stephenanokz98/o/imgs%2Fai7hi-roj7d.avif?alt=media&token=2f130a5a-f0df-4966-9ae7-d3cb840d9f55"
                alt=""
              />
              <span>
                Readiness to work is our great heritage from our founder
              </span>
            </div>
            <div className="body">
              <p>
                In imitation of our founder Bishop Joseph Shanahan who was a man
                of intense missionary zeal for the realization of God’s glory.
                We express our missionary charism by our readiness and
                willingness to be sent and to go beyond the borders of our own
                country and culture sharing the Good News with those in any kind
                of need especially the poor, oppressed and exploited through the
                ministries of healing, education, pastoral work and community
                development.
              </p>
              <p>
                Knowing that Charism is “caught” and not “thought”. Willingness
                and readiness to cross our geographical boundaries presupposes
                flexibility also in crossing the boundary of our own will, dying
                to ourselves like the grain of wheat to search for God’s will in
                every ministry we find ourselves like Jesus whose food was to do
                God’s will. This is a source of great joy for us because in
                God’s will is our joy, peace, and fulfilment.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="aboutInfoItem spirituality"
        >
          <div data-aos="fade-down" data-aos-duration="1000" className="title">
            <span>Spirituality</span>
          </div>
          <div className="content">
            <div className="image">
              <img
                src="https://ik.imagekit.io/stephenanokz98/o/imgs%2Falqnv-31i13.avif?alt=media&token=95b80d15-4f38-4367-a23c-8f3eabfef0df"
                alt=""
              />
              <span>
                The Celebration of the Eucharist is at the heart of our prayer
                as a worshiping community.
              </span>
            </div>
            <div className="body">
              <p>
                In the spirit of our founder Bishop Joseph Shanahan who was
                blessed by a deep sense of God’s presence in all of life to the
                point that he said “My greatest happiness as a missionary is my
                union with the living love of God in my soul which for me is a
                taste of heaven on earth”. As his missionary daughters we follow
                him in his Active- Contemplative spiritulity.
              </p>
              <p>
                {" "}
                We struggle on daily basis to let our prayer flow into whatever
                we do in other words making constant effort to witness Christ
                and make him known and loved “in” and “through” our lives as we
                engage in our various apostolates. Our founder told us that a
                missionary must be “fulfilled” and “contemplative” and so our
                greatest gift to the world is a quality inner life, that is
                living from deep within, from inside out. Following our
                Constitutions each Sister tries to spend substantial period
                daily in private prayer, Rosary, days of recollection and our
                annual retreat and other means stipulated so as to be energized
                for mission.
              </p>
              <p>
                We also have an inviting Retreat and conference Centre at
                Nsukka, Nigeria that helps those who use it discover God in the
                silence of their heart, below are the facilities we have in our
                centre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
