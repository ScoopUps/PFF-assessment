import React, { Component } from 'react';
import Brady from './Images/Brady.png';
import Ryan from './Images/Ryan.png';

export class PlayerCard extends React.Component { 

  render(){

  	return(
  		<div id="player-card">
        <img id="player-pic" src={this.props.playerPic} />
        <ul>
          <li>Name: {this.props.playerProps.first_name} {this.props.playerProps.last_name}</li>
          <li>Born: {this.props.playerProps.date_of_birth}</li>
          <li>Drafted: {this.props.playerProps.draft_season}</li>
          <li>Round: {this.props.playerProps.draft_round}</li>
          <li>Pick: {this.props.playerProps.draft_pick}</li>
        </ul>
      </div>
  		);
  	}
}