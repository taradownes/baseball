import React from 'react';
import "./SidebarCard.css";



const SidebarCard = (props) => {
    const { homeTeam, awayTeam, startTime, venue } = props;
    return (
        <div className="sidebarcard">
            <ul>
                <li className="teamsPlaying">  {awayTeam} vs {homeTeam}</li>
                <li><i className="far fa-clock"></i>  {startTime}</li>
                <li>@ {venue} </li>
                {/* <button onClick={click}><i className="fas fa-plus"></i></button></li> */}
            </ul>
        </div>
    )
}

export default SidebarCard;