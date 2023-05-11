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
              <img
                src="https://ik.imagekit.io/stephenanokz98/o/imgs%2Fayvgd-t0byv.avif?alt=media&token=37861741-100c-4eb9-86f6-452531d55888"
                alt="aspirancy"
              />
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
              <img
                src="https://ik.imagekit.io/stephenanokz98/o/imgs%2Fasnox-4ftiw.avif?alt=media&token=3fa61183-78d1-4aa6-bc38-452adce994a3"
                alt="pre-candidacy"
              />
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
              <img
                src="https://ik.imagekit.io/stephenanokz98/o/imgs%2Fajhwx-cjbjk.avif?alt=media&token=e37bd992-1d7a-453a-ad71-2f1069661308"
                alt="candidacy"
              />
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
              <img
                src="https://ik.imagekit.io/stephenanokz98/o/imgs%2Fawntv-ufcmp.avif?alt=media&token=e3af8b35-f153-4cf1-ae3a-7f35212b8f4b"
                alt="novitiate"
              />
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
              <img
                src="https://ik.imagekit.io/stephenanokz98/o/imgs%2Fagy8f-hwrsc.avif?alt=media&token=22fddb3c-b9d2-4429-8502-889eb8935c2b"
                alt="first profession"
              />
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
              <img
                src="https://ik.imagekit.io/stephenanokz98/o/imgs%2Fabyb8-ehqki.avif?alt=media&token=960e70c3-b678-4810-b4a6-8ad9e2824401"
                alt="final profession"
              />
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
              <img
                src="https://ik.imagekit.io/stephenanokz98/o/imgs%2Fazdhk-q1adb.avif?alt=media&token=0f89b701-8c76-4c27-baff-1e1311f895c2"
                alt="on-going formation"
              />
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
