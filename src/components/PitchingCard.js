import React from 'react';
import './Card.css';

const PitchingCard = (props) => {
    const { firstName, lastName, era} = props
    return (
        <div className="card dib grow ">
            <p className="player-name">{ firstName } {lastName}</p>
            <p>ERA: { era }</p>
        </div>
    );
}

export default PitchingCard;