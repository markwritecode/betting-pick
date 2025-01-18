import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    
      <div className="playing-bet">
          <div className="global-shape style-2">
              <img src="assets/img/shapes/shape-1.png" alt="" data-aos="fade-left" data-aos-duration="700" data-aos-delay="200"/>
          </div>
          <div className="global-shape style-3">
              <img src="assets/img/shapes/shape-1.png" alt="" data-aos="fade-left" data-aos-duration="700" data-aos-delay="200"/>
          </div>
          <div className="container">
              <div className="section-title" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in">
                  <h3 className="sub-title">Recent bet</h3>
                  <h2 className="title">Choose Your Match & Place A Bet</h2>
              </div>
              <div className="sports-menu scrollable-menu" data-aos="fade-up" data-aos-delay="150" data-aos-duration="500" data-aos-easing="ease-in">
                  <ul className="nav nav-pills" id="sports-tab" role="tablist">
                      <li className="nav-item" role="presentation">
                          <button className="nav-link active" id="sports-all-tab" data-bs-toggle="pill" data-bs-target="#sports-all" type="button" role="tab" aria-controls="sports-all" aria-selected="true">
                              <span className="sport-icon">
                                  <img src="/assets/img/playing-bet/sports-icon/all-sports.png" alt=""/>
                              </span>
                              <span className="sport-name">All Sports</span>
                          </button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className="nav-link" id="sports-football-tab" data-bs-toggle="pill" data-bs-target="#sports-football" type="button" role="tab" aria-controls="sports-football" aria-selected="false">
                              <span className="sport-icon">
                                  <img src="/assets/img/playing-bet/sports-icon/football.png" alt=""/>
                              </span>
                              <span className="sport-name">football</span>
                          </button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className="nav-link" id="sports-tennis-tab" data-bs-toggle="pill" data-bs-target="#sports-tennis" type="button" role="tab" aria-controls="sports-tennis" aria-selected="false">
                              <span className="sport-icon">
                                  <img src="/assets/img/playing-bet/sports-icon/tennis.png" alt=""/>
                              </span>
                              <span className="sport-name">Tennis</span>
                          </button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className="nav-link" id="sports-basketball-tab" data-bs-toggle="pill" data-bs-target="#sports-basketball" type="button" role="tab" aria-controls="sports-basketball" aria-selected="false">
                              <span className="sport-icon">
                                  <img src="/assets/img/playing-bet/sports-icon/basketball.png" alt=""/>
                              </span>
                              <span className="sport-name">basketball</span>
                          </button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className="nav-link" id="sports-hockey-tab" data-bs-toggle="pill" data-bs-target="#sports-hockey" type="button" role="tab" aria-controls="sports-hockey" aria-selected="false">
                              <span className="sport-icon">
                                  <img src="/assets/img/playing-bet/sports-icon/hockey.png" alt=""/>
                              </span>
                              <span className="sport-name">hockey</span>
                          </button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className="nav-link" id="sports-volleyball-tab" data-bs-toggle="pill" data-bs-target="#sports-volleyball" type="button" role="tab" aria-controls="sports-volleyball" aria-selected="false">
                              <span className="sport-icon">
                                  <img src="/assets/img/playing-bet/sports-icon/volleyball.png" alt=""/>
                              </span>
                              <span className="sport-name">volleyball</span>
                          </button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className="nav-link" id="sports-badminton-tab" data-bs-toggle="pill" data-bs-target="#sports-badminton" type="button" role="tab" aria-controls="sports-badminton" aria-selected="false">
                              <span className="sport-icon">
                                  <img src="/assets/img/playing-bet/sports-icon/badminton.png" alt=""/>
                              </span>
                              <span className="sport-name">badminton</span>
                          </button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className="nav-link" id="sports-baseball-tab" data-bs-toggle="pill" data-bs-target="#sports-baseball" type="button" role="tab" aria-controls="sports-baseball" aria-selected="false">
                              <span className="sport-icon">
                                  <img src="/assets/img/playing-bet/sports-icon/baseball.png" alt=""/>
                              </span>
                              <span className="sport-name">baseball</span>
                          </button>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    
  );
}
