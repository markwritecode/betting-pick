"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import Constants from "../constants";
import { Random } from "random-js";


export default function Home() {
    const [matches, setMatches] = useState(null);

    const fetchTournament = async () => {
        console.log("Fetching tournaments");
        
        const request = await fetch(`http://localhost:8000`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
        });
        const response = await request.json();
        console.log(response);
        setMatches(response);
    }
    
    const selectMatches = async () => {
        if(matches == null && matches.length == 0){
            return 0;
        }
        
        const matchSelection = [];
        matches.forEach((match, index, matches) => {
            
            match.events[0].markets.forEach((market, index, markets)=>{
                
                const outcome = market.outcomes.filter(outcome => outcome.odds > 1.20 && outcome.odds < 1.30);
                if(outcome != null && outcome.length != 0 && market.id !== 10){
                    const matchObject = {   
                        event: match.events[0],
                        marketId: market.id,
                        specifier: null
                    }
                    if(outcome.length === 1){
                         matchObject.outcome = outcome[0];   
                    }
                    if(outcome.length > 1){
                        const random = new Random();
                        const randomNum = random.integer(1, outcome.length);
                        matchObject.outcome = outcome[randomNum-1]; 
                    }
                    matchSelection.push(matchObject);
                }
                
            })
        });

        console.log(matchSelection);

    }

    useEffect(() => {
        fetchTournament();
        return () => {
          console.log("Component Unmounted!");
        };
    }, []);

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
                                    <img src="assets/img/playing-bet/sports-icon/all-sports.png" alt=""/>
                                </span>
                                <span className="sport-name">All Sports</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="sports-football-tab" data-bs-toggle="pill" data-bs-target="#sports-football" type="button" role="tab" aria-controls="sports-football" aria-selected="false">
                                <span className="sport-icon">
                                    <img src="assets/img/playing-bet/sports-icon/football.png" alt=""/>
                                </span>
                                <span className="sport-name">football</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="sports-tennis-tab" data-bs-toggle="pill" data-bs-target="#sports-tennis" type="button" role="tab" aria-controls="sports-tennis" aria-selected="false">
                                <span className="sport-icon">
                                    <img src="assets/img/playing-bet/sports-icon/tennis.png" alt=""/>
                                </span>
                                <span className="sport-name">Tennis</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="sports-basketball-tab" data-bs-toggle="pill" data-bs-target="#sports-basketball" type="button" role="tab" aria-controls="sports-basketball" aria-selected="false">
                                <span className="sport-icon">
                                    <img src="assets/img/playing-bet/sports-icon/basketball.png" alt=""/>
                                </span>
                                <span className="sport-name">basketball</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="sports-hockey-tab" data-bs-toggle="pill" data-bs-target="#sports-hockey" type="button" role="tab" aria-controls="sports-hockey" aria-selected="false">
                                <span className="sport-icon">
                                    <img src="assets/img/playing-bet/sports-icon/hockey.png" alt=""/>
                                </span>
                                <span className="sport-name">hockey</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="sports-volleyball-tab" data-bs-toggle="pill" data-bs-target="#sports-volleyball" type="button" role="tab" aria-controls="sports-volleyball" aria-selected="false">
                                <span className="sport-icon">
                                    <img src="assets/img/playing-bet/sports-icon/volleyball.png" alt=""/>
                                </span>
                                <span className="sport-name">volleyball</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="sports-badminton-tab" data-bs-toggle="pill" data-bs-target="#sports-badminton" type="button" role="tab" aria-controls="sports-badminton" aria-selected="false">
                                <span className="sport-icon">
                                    <img src="assets/img/playing-bet/sports-icon/badminton.png" alt=""/>
                                </span>
                                <span className="sport-name">badminton</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="sports-baseball-tab" data-bs-toggle="pill" data-bs-target="#sports-baseball" type="button" role="tab" aria-controls="sports-baseball" aria-selected="false">
                                <span className="sport-icon">
                                    <img src="assets/img/playing-bet/sports-icon/baseball.png" alt=""/>
                                </span>
                                <span className="sport-name">baseball</span>
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="faq">
                    
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10 col-lg-10">
                                <div className="search-bar-element" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" data-aos-easing="ease-in">
                                    <form>
                                        <input type="text" placeholder="Ask a question..."/>
                                        <button type="button" onClick={selectMatches}><i className="fa-light fa-magnifying-glass"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="tab-content" id="sports-tabContent" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-easing="ease-in">
                    <div className="tab-pane fade show active" id="sports-football" role="tabpanel" aria-labelledby="sports-football-tab">
                        <div className="single-sports-item">
                            <h2 className="accordion-header" id="football-matches">
                                <div className="sports-header">
                                    <span className="single-sports-icon">
                                        <img src="assets/img/playing-bet/icon/icon-1.png" alt=""/>
                                    </span>
                                    <span className="single-sports-name">Football Matches (05)</span>
                                    <span className="single-sports-img">
                                        <img src="assets/img/playing-bet/football-bg.png" alt=""/>
                                    </span>
                                    <a href="#" className="see-all-sports-btn">See all <i className="fa-light fa-arrow-right-long"></i></a>
                                </div>
                            </h2>
                            
                            
                                <div className="sports-expanded-list">
                                    <div className="sports-body">
                                        <div className="playing-sports-all no-tabs-here">
                                            <div className="single-tournament">
                                                {/* <div className="tournament-title">
                                                    <span className="title-text">Football Matches</span>
                                                    <span className="match-quantity">(3)</span>
                                                </div> */}
                                                <div className="all-tournament-match">
                                                    
                                                    { matches ?
                                                        matches.map((match, index)=>(
                                                            <div className="single-t-match">
                                                                <div className="match-time">
                                                                    <span className="time-icon">
                                                                        <i className="fa-regular fa-clock"></i>
                                                                    </span>
                                                                    <span className="m-date">24 Nov</span>
                                                                    <span className="m-time">9:22 am</span>
                                                                </div>
                                                                <div className="playing-teams">
                                                                    <div className="single-team">
                                                                        <div className="team-descr">
                                                                            <span className="team-icon">
                                                                                <img src="assets/img/playing-bet/team-icon/team-3.png" alt=""/>
                                                                            </span>
                                                                            <span className="team-name">{match.events[0].homeTeamName}</span>
                                                                        </div>
                                                                        <div className="team-score">0</div>
                                                                    </div>
                                                                    <div className="single-team">
                                                                        <div className="team-descr">
                                                                            <span className="team-icon">
                                                                                <img src="assets/img/playing-bet/team-icon/team-4.png" alt=""/>
                                                                            </span>
                                                                            <span className="team-name">{match.events[0].awayTeamName}</span>
                                                                        </div>
                                                                        <div className="team-score">0</div>
                                                                    </div>
                                                                </div>
                                                                <div className="placing-bet">
                                                                    <a href="#0" className="single-bet-place">
                                                                        <span className="bet-ratio">{match.events[0].markets[0].outcomes[0].odds}</span>
                                                                        <span className="team-name">{match.events[0].homeTeamName}</span>
                                                                    </a>
                                                                    <a href="#0" className="single-bet-place draw-box">
                                                                        <span className="bet-ratio">{match.events[0].markets[0].outcomes[1].odds}</span>
                                                                        <span className="team-name">draw</span>
                                                                    </a>
                                                                    <a href="#0" className="single-bet-place">
                                                                        <span className="bet-ratio">{match.events[0].markets[0].outcomes[1].odds }</span>
                                                                        <span className="team-name">{match.events[0].awayTeamName}</span>
                                                                    </a>
                                                                </div>
                                                                <span className="bet-ratio-details">
                                                                    <a href='match-details.html'>33 <i className="fa-regular fa-angle-right"></i></a>
                                                                </span>
                                                            </div>
                                                        )) :
                                                        <div className="d-flex justify-content-center py-5">
                                                            <div className="spinner-border" role="status">
                                                                <span className="visually-hidden">Loading...</span>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            
                        </div>
                    </div>
                </div>
                <div className="see-all-sports-btn-cover" data-aos="fade-up" data-aos-delay="150" data-aos-duration="500" data-aos-easing="ease-in">
                    <a className='prd-btn-4' href='playing-bet.html'>see all sports <i className="fa-duotone fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
        
    );
}

