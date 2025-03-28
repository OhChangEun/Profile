import computerImg1 from "../computer1.png";
import computerImg2 from "../computer2.png";
import mobileImg from "../mobile.jpg";

function Projects() {
  return (
    <section className="portfolio">
      <div className="heading">
        <h1>
          Latest <span>Project</span>
        </h1>
      </div>

      <div className="portfolio-container">
        <div className="portfolio-box">
          <div className="image-container">
            <img src={computerImg1} alt="1" />
          </div>
          <div className="portfolio-layer">
            <h4>Shoebill</h4>
            <p>ERP 프로그램</p>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={mobileImg} alt="1" />
          <div className="portfolio-layer">
            <h4>Ketchup</h4>
            <p>외국인을 위한 메뉴판 번역 및 음식 소개 어플</p>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={computerImg2} alt="1" />
          <div className="portfolio-layer">
            <h4>Vehicle Database Management Program</h4>
            <p>사내 차종 DB 관리 프로그램</p>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={computerImg2} alt="1" />
          <div className="portfolio-layer">
            <h4>To be added...</h4>
            <p>사내 차종 DB 관리 프로그램</p>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
