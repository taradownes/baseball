import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';



class App extends Component {
  constructor(){
    super();
    this.state = {
      gamesToday: [],
      playersToday: [],
      isLoaded: false,
      playersLoaded: false,
    }
  }



  componentDidMount(){
    fetch('https://api.mysportsfeeds.com/v2.1/pull/mlb/2019-regular/games.json', { 
      method: 'get',
      dataType: 'json',
      async: false, 
      headers: new Headers({
        'Authorization': 'Basic '+ btoa('6f0118b4-2296-40b3-933a-29dc54:MYSPORTSFEEDS')
      })
    })
    .then(response => response.json())
    .then(games => {
        this.setState({gamesToday: games, isLoaded: true})})
      .catch(err => console.log(err));

    fetch('https://api.mysportsfeeds.com/v2.1/pull/mlb/2019-regular/player_stats_totals.json', { 
      method: 'get',
      dataType: 'json',
      async: false, 
      headers: new Headers({
        'Authorization': 'Basic '+ btoa('6f0118b4-2296-40b3-933a-29dc54:MYSPORTSFEEDS')
      })
    })
    .then(response => response.json())
    .then(players => {
        this.setState({playersToday: players, playersLoaded: true})})
      .catch(err => console.log(err));
    }


  render() {    
    if(this.state.isLoaded && this.state.playersLoaded){
      return (     
        <div className="">
        <Navbar />
        <div className="container">
          <div className="sidebar">
            <Sidebar 
            games={this.state.gamesToday}
            />
          </div>
          <div className="main">
          <div className="main-title">
                <img className="fl" src="https://a3.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fmlb%2F500%2Fchc.png" alt="Cubs" /><img className="fr" src="https://www.bleachernation.com/wp-content/uploads/2018/02/everybody-in-cubs-logo-slogan.jpg" alt="MLB" />
                <div>
                <Main players={this.state.playersToday}/>

                </div>
               
            </div>
          </div>
        </div>
        </div>
      ); 
    }

    return (     
      <div className="">
      <Navbar />
      <div className="container">
        <div className="sidebar">
        <div>
            <h1>Games Today: </h1>
            <h3>Loading...</h3>
        </div>
        </div>
        <div className="main">
            <div className="main-title">
                <img className="fl" src="https://a3.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fmlb%2F500%2Fchc.png" alt="Cubs" /><img className="fr" src="https://www.bleachernation.com/wp-content/uploads/2018/02/everybody-in-cubs-logo-slogan.jpg" alt="MLB" />
               
            </div>
        </div>
      </div>
      </div>
    );
      
      
    }
  } 

export default App;
