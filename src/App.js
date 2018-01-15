import React, { Component } from 'react';
import './App.css';
import PFF from './Images/PFFHeader.jpg';
import { Table } from './Table'; 
import { PlayerCard } from './PlayerCard'; 
import Brady from './Images/Brady.png';
import Ryan from './Images/Ryan.png';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      statistics: [],
      player: [],
      value: 698,
      playerPic: Brady
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://web.profootballfocus.com.s3-website-us-east-1.amazonaws.com/quarterbacks.json")
      .then(res => res.json())
      .then(
        (result) => {
          let statsResult = [];
          let playerResult = [];
          for (let i = 0; i < result.statistics.length; i++){
            if(result.statistics[i].player_id == this.state.value){
              statsResult.push(result.statistics[i])
            }
          }
          for (let j = 0; j < result.players.length; j++){
            if(result.players[j].player_id == this.state.value){
              playerResult = result.players[j];
            }
          }
          if(this.state.value == 698){
            this.setState({
              playerPic: Brady
            });
          }else{
            this.setState({
              playerPic: Ryan
            });
          }
          this.setState({
                statistics: statsResult,
                player: playerResult 
              });
        },
      )
  }

  componentDidMount() {
    fetch("http://web.profootballfocus.com.s3-website-us-east-1.amazonaws.com/quarterbacks.json")
      .then(res => res.json())
      .then(
        (result) => {
          let statsResult = [];
          let playerResult = [];
          for (let i = 0; i < result.statistics.length; i++){
            if(result.statistics[i].player_id == this.state.value){
              statsResult.push(result.statistics[i])
          }
          for (let j = 0; j < result.players.length; j++){
            if(result.players[j].player_id == this.state.value){
              playerResult = result.players[j];
          }
        }
      }
          this.setState({
                statistics: statsResult,
                player: playerResult 
              });
        },
      )
  }

  render() {
    return (
      <div className="App">
        <img id="headline" src={PFF}/>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick a QB: 
            <select value={this.state.value} onChange={this.handleChange}>
              <option selected value={698}>Tom Brady</option>
              <option value={4317}>Matt Ryan</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <PlayerCard playerPic={this.state.playerPic} playerProps={this.state.player} />
        <Table stats={this.state.statistics} />
      </div>
    );
  }
}

export default App;