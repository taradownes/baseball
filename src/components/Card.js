import React from 'react';
import './Card.css';

const Card = (props) => {
    const { lastName, firstName, batAvg} = props
    return (
        <div className="card dib grow">
            <p className="player-name">{firstName } {lastName}</p>
            <p>Batting Avg: { batAvg }</p>
        </div>
    );
}

export default Card