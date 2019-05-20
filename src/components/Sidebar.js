import React from 'react';
import SidebarCard from './SidebarCard';
import './Sidebar.css';

    const Sidebar = ({games}) => {
            const date = new Date();
            const teams = games.games.map((game, i) => {
                let gameDate = new Date(Date.parse(game.schedule.startTime));
                if(gameDate.toDateString() === date.toDateString()){
                    return ( <SidebarCard key={i} 
                        homeTeam={game.schedule.homeTeam.abbreviation}
                        awayTeam={game.schedule.awayTeam.abbreviation}
                        startTime={gameDate.toLocaleTimeString()}
                        venue={game.schedule.venue.name}
                       
                        /> )
                    }   
                    return null
                })
            
                return (
                    
                    <div className='sidebar-content'>
                        <h1 >Games Today</h1>
                        <h3>{ date.toDateString()}</h3>
                        {teams}
                    </div>
    );
}





export default Sidebar;