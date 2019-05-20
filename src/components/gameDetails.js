import React from 'react';
import './gameDetails.css';


const GameDetails = ({details}) => {
     if(details.score.awayScoreTotal === null){
        return (
            <div className="game-details">
                <h4>Game has not started</h4>
                {console.log(details.score.awayScoreTotal)}
            </div>
        )
    } else {
        return (
            <div className="game-details">
            <h4>Score</h4>
            <ul>
                <li>{details.schedule.homeTeam.abbreviation} : {details.score.homeScoreTotal} <i className="fas fa-arrows-alt-h"></i>{details.schedule.awayTeam.abbreviation} : {details.score.awayScoreTotal}
                </li>
            </ul>
        </div>
        )
        
    }

}

export default GameDetails;