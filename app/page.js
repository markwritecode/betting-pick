"use client";
import styles from "./page.module.css";
import { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import Constants from "../constants";
import { Random } from "random-js";

const  base_url = `http://192.168.1.71:8000`;

const random = new Random();


export default function Home() {

    const [filteredMatches, setfilteredMatches] = useState([]);
    const [matchOutcomes, setMatchOutcomes] = useState(null);
    const [outcomeTypes, setOutcomeTypes] = useState(null);
    const outcomeRef = useRef(null);
    const outcomeInputRef = useRef(null);
    const outcomeListRef = useRef(null);

    const filterGames = async (e)  => {
        console.log("Fetching tournaments");
        e.preventDefault();
        const formData = new FormData(e.target);
        const jsonData = Object.fromEntries(formData.entries());
        const request = await fetch(`${base_url}/filter-games`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonData)
        });
        
        const { matchSelection } = await request.json();
        console.log( matchSelection );
        setfilteredMatches(matchSelection);
        
    }

    const fetchOutcome = async ()=>{
        console.log("fetching Outcomes");
        const request = await fetch(`${base_url}/fetch-outcome`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
        });

        const response = await request.json();
        setOutcomeTypes(response.outcomes)
        console.log(response.outcomes);
        
    }

    const toggleOutcome = async ()=>{
        if(outcomeRef.current.style.display == "block"){
            outcomeRef.current.style.display = "none";
            return 0;
        }
        outcomeRef.current.style.display = "block"
    }

    const selectOutcome = async (option)=>{
        console.log(option);
        outcomeInputRef.current.value = option;
    }

    const randomSelect = async () => {
        if(matchOutcomes == null || matchOutcomes.length == 0){
            return 0;
        }
        
        const randomSelection = [];
        
        while (gamesInTicket > randomSelection.length) {
            
            const number = random.integer(1, matchOutcomes.length);
            const randomMatch = matchOutcomes[number-1]
            if (!randomSelection.find(selection => selection.eventId === randomMatch.event.eventId) && randomMatch.marketId !== "10"){
                randomSelection.push({
                    "eventId": randomMatch.event.eventId,
                    "marketId": randomMatch.marketId,
                    "outcomeId": randomMatch.outcome.id,
                    "specifier": randomMatch.specifier
                });
            }
            
        }

        const request = await fetch(`${base_url}/book-ticket`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({betslip:randomSelection})
        });

        const { ticket} = await request.json();

        alert(ticket.data.shareCode);

        console.log(randomSelection);

    }

    useEffect(() => {
        fetchOutcome();
        return () => {
            console.log("Outcome Unmounted!");
        };
    }, []);

    

    useEffect(() => {
        randomSelect()
        return () => {
          console.log("Component Unmounted!");
        };
    }, [matchOutcomes]);

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
   
                <div className="container mb-4">
                    <form onSubmit={filterGames}>
                        <div className="row align-items-center g-2">
                            <div className="col-md-2">
                                <input type="date" name="fromDate" className="form-control p-3" placeholder="" aria-label="From Date"/>
                            </div>
                            
                            <div className="col-md-2">
                                <input type="date" name="toDate" className="form-control p-3" placeholder="" aria-label="To Date" />
                            </div>

                            <div className="col-md-2">
                                <div className="position-relative">
                                    <input type="text" className="form-control p-3 " placeholder="Included Outcomes" aria-label="Last name" onFocus={toggleOutcome} ref={outcomeInputRef}/>
                                    <div className="card position-absolute w-100 mt-2" style={{zIndex:"1000", display:"none"}} ref={outcomeRef}>
                                        <ul className="list-group list-group-flush">
                                            {
                                                outcomeTypes ? 
                                                outcomeTypes.map((outcomeType, index)=>(
                                                    <>
                                                        <li className="list-group-item" key={index} onClick={ () => { selectOutcome(outcomeType.name); toggleOutcome(); } }>{outcomeType.name}</li>
                                                    </> 
                                                ))
                                                :
                                                <li className="list-group-item">No Outcome Avaliable</li>
                                            }
                                            
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="col-md-2">
                                <input type="text" className="form-control p-3" placeholder="Odds From" aria-label="Odds From" name="oddsFrom"/>
                            </div>

                            <div className="col-md-2">
                                <input type="text" className="form-control p-3" placeholder="Odds To" aria-label="Odds To" name="oddsTo"/>
                            </div>

                            <div className="col-md-2">
                                <input type="text" className="form-control p-3" placeholder="Games IN Ticket" aria-label="numberOfGames" name="numberOfGames"/>
                            </div>
                            
                            <div className="col-md-12 ">
                                <button type="submit" className="btn btn-primary p-3 px-4 border-0 w-100" style={{background:"linear-gradient(135.89deg, #D03355 -5.11%, #FB7A6B 97.89%)"}} >Generate</button>
                            </div>
                        </div>
                    </form>
                </div>
                
                <div className="tab-content" id="sports-tabContent" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-easing="ease-in">
                    <div className="tab-pane fade show active" id="sports-football" role="tabpanel" aria-labelledby="sports-football-tab">
                        <div className="single-sports-item">
                            <h2 className="accordion-header" id="football-matches">
                                <div className="sports-header">
                                    <span className="single-sports-icon">
                                        <img src="assets/img/playing-bet/icon/icon-1.png" alt=""/>
                                    </span>
                                    <span className="single-sports-name">Football Matches ({`${filteredMatches.length}`})</span>
                                    <span className="single-sports-img">
                                        <img src="assets/img/playing-bet/football-bg.png" alt=""/>
                                    </span>
                                    <a href="#" className="see-all-sports-btn">Create BetSlip <i className="fa-light fa-arrow-right-long"></i></a>
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
                                                
                                                { filteredMatches != 0 ?
                                                    filteredMatches.map((match, index)=>(
                                                        <div key={index} className="single-t-match">
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
                                                                        <span className="team-name">{match.event.homeTeamName}</span>
                                                                    </div>
                                                                    <div className="team-score">0</div>
                                                                </div>
                                                                <div className="single-team">
                                                                    <div className="team-descr">
                                                                        <span className="team-icon">
                                                                            <img src="assets/img/playing-bet/team-icon/team-4.png" alt=""/>
                                                                        </span>
                                                                        <span className="team-name">{match.event.awayTeamName}</span>
                                                                    </div>
                                                                    <div className="team-score">0</div>
                                                                </div>
                                                            </div>
                                                            {/* <div className="placing-bet">
                                                                <a href="#0" className="single-bet-place">
                                                                    <span className="bet-ratio">{match.events[0].markets[0].outcomes[0].odds}</span>
                                                                    <span className="team-name">{match.events[0].homeTeamName}</span>
                                                                </a>
                                                                <a href="#0" className="single-bet-place draw-box">
                                                                    <span className="bet-ratio">{match.events[0].markets[0].outcomes[1].odds}</span>
                                                                    <span className="team-name">draw</span>
                                                                </a>
                                                                <a href="#0" className="single-bet-place">
                                                                    <span className="bet-ratio">{match.events[0].markets[0].outcomes[1].odds}</span>
                                                                    <span className="team-name">{match.events[0].awayTeamName}</span>
                                                                </a>
                                                            </div>
                                                            <span className="bet-ratio-details">
                                                                <a href='match-details.html'>33 <i className="fa-regular fa-angle-right"></i></a>
                                                            </span> */}
                                                        </div>
                                                    )) :
                                                    <div className="d-flex justify-content-center py-5">
                                                        <h2>Filter From Available Games</h2>
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

