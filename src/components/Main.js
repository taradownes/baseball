import React from 'react';
import Card from "./Card";
import PitchingCard from './PitchingCard'
import "./Main.css"


const Main = ({players}) => {   
    const positionPlayers = players.playerStatsTotals.map((player, i) => {
        if(player.team.abbreviation === "CHC") {
            if(player.stats.gamesPlayed > 0){
                if(player.player.primaryPosition !== 'P'){
                    return <Card key={player.player.id} lastName={player.player.lastName} firstName={player.player.firstName} batAvg={player.stats.batting.battingAvg}/>
                }
            } 
        }
    })
    const pitchers = players.playerStatsTotals.map((player, i) => {
            if(player.team.abbreviation === "CHC") {
                if(player.stats.gamesPlayed > 0){
                    if(player.player.primaryPosition === 'P'){
                        return <PitchingCard key={player.player.id} firstName={player.player.firstName} lastName={player.player.lastName} era={player.stats.pitching.earnedRunAvg} />
                    }
                } 
            }
     });

    return (
        <div className="main">
            <h2 className="w5">Position Players</h2>
            <div className="tc players">
                {positionPlayers}
            </div>
            <h2>Pitchers</h2>
            <div className="tc players">
                {pitchers}
            </div>
        </div>
    );
}

export default Main;