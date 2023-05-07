import React from "react";
import "./FormationInfo.scss";
import Banner from "../../components/Banner/Banner";

const FormationInfo = () => {
  return (
    <div className="FormationInfo">
      <Banner
        title="Formation"
        subTitle='Then I heard the voice of the Lord saying, "whom shall I send? And who will go for us?" Isiah 6:8'
      />
      <div className="formationContainer">
        <div data-aos="fade-down" data-aos-duration="1000" className="title">
          <h2>Our Stages of Formation</h2>
        </div>
        <div className="stageList">
          <div data-aos="fade-up" data-aos-duration="1000" className="item">
            <div className="stageTitle">
              <h3>Aspirancy</h3>
            </div>
            <div className="stageBody">
              <img src="/img/ayvgd-t0byv.avif" alt="aspirancy" />
              <p>
                This is the stage of invitation and contact with interested
                young women, who has some sense of being called by God to
                missionary life among the poor, to explore other ways of service
                within the Christian vocation. If she is still studying, she is
                encouraged to continue, while she maintains correspondence with,
                and occasional visit to the contact community, enters into
                communication with the contact person in her area.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="item">
            <div className="stageTitle">
              <h3>Pre-candidacy</h3>
            </div>
            <div className="stageBody even">
              <img src="/img/asnox-4ftiw.avif" alt="pre-candidacy" />
              <p>
                This period provides opportunity for serious discernment and it
                lasts for one year. The person must either be working or
                studying while visiting our convent last weekend of every month
                to learn more about our way of life.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="item">
            <div className="stageTitle">
              <h3>Candidacy</h3>
            </div>
            <div className="stageBody">
              <img src="/img/ajhwx-cjbjk.avif" alt="candidacy" />
              <p>
                This is the time of formal entrance into the life of our
                congregation and it lasts for two years in our candidacy house.
                It is a time of deepening one’s knowledge of Christian life
                while discerning where God is leading.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="item">
            <div className="stageTitle">
              <h3>Novitiate</h3>
            </div>
            <div className="stageBody even">
              <img src="/img/awntv-ufcmp.avif" alt="novitiate" />
              <p>
                This is two years of intense formation on prayers, study,
                community living and apostolate, sharing in the daily life and
                work of the Sisters, all is done in view of making the First
                profession.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="item">
            <div className="stageTitle">
              <h3>First Profession</h3>
            </div>
            <div className="stageBody">
              <img src="/img/agy8f-hwrsc.avif" alt="first profession" />
              <p>
                This is made between five and nine years of first profession
                when one has gained experience of missionary religious life.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="item">
            <div className="stageTitle">
              <h3>Final Profession</h3>
            </div>
            <div className="stageBody even">
              <img src="/img/abyb8-ehqki.avif" alt="final profession" />
              <p>
                Vows of poverty, consecrated celibacy and obedience admits a
                person to the life and work of the congregation. The Sister
                continues to serve God’s people in different apostolates, living
                with other Sisters in community while deepening her personal
                relationship with God.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="item">
            <div className="stageTitle">
              <h3>On -going Formation</h3>
            </div>
            <div className="stageBody">
              <img src="/img/azdhk-q1adb.avif" alt="on-going formation" />
              <p>
                Vows of poverty, consecrated celibacy and obedience admits a
                person to the life and work of the congregation. The Sister
                continues to serve God’s people in different apostolates, living
                with other Sisters in community while deepening her personal
                relationship with God.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationInfo;
