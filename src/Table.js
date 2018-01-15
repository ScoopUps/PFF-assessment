import React, { Component } from 'react';

export class Table extends React.Component { 

render(){

	function calcPasserRating(cmp, att, yds, td, int){
		let a = (cmp/att - .3) * 5;
		if(a > 2.735){
			a = 2.375;
		}else if(a < 0){
			a = 0;
		}
		let b = (yds/att - 3) * .25;
		if(b > 2.735){
			b = 2.375;
		}else if(b < 0){
			b = 0;
		}
		let c = (td/att - .3) * 20;
		if(c > 2.735){
			c = 2.375;
		}else if(c < 0){
			c = 0;
		}
		let d = 2.375 - (int/att * 25);
		if(d > 2.735){
			d = 2.375;
		}else if(d < 0){
			d= 0;
		}
		let rating = ((a + b + c + d) / 6) * 100;
		let result = rating.toFixed(2);
		return parseFloat(result, 2);

}

	return(
		<table>
          <thead>
          	<tr>
	          	<th>Week</th>
	          	<th>Cmp</th>
	          	<th>Att</th>
	          	<th>Yds</th>
	          	<th>TD</th>
	          	<th>Int</th>
	          	<th>Opponent</th>
	          	<th>Rating</th>
            </tr>
          </thead>
   			{this.props.stats.map((stat, i) => (
              <tr key={i}>
	              <td>{stat.week}</td>
	              <td>{stat.completions}</td> 
		          <td>{stat.attempts}</td> 
	              <td>{stat.yards}</td>
		          <td>{stat.touchdowns}</td> 	
		          <td>{stat.interceptions}</td> 
		          <td>{!stat.on_home_team ? stat.home_team : stat.away_team}</td>
		          <td>{calcPasserRating(stat.completions, stat.attempts, stat.yards, stat.touchdowns, stat.interceptions)}</td>
              </tr>
            ))}
		</table>
		);
	}
}