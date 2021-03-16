import React from 'react';
import { TeamCard } from '../../components';
import {Container,
  GridContainer
} from './styled'

class Grid extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      teams:[],
      teamsBkp:[],
      loading:true
    }
  }
  
  async componentDidMount(){
    try {
      const response = await fetch('https://api.sportsdata.io/v3/nba/scores/json/teams?key=0138b6d456094a929e46d2a94aee14fe')
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json()
      this.setState({
        teams:json,
        loading:false
      })
    } catch (error) {
    }
  }

  render() {
    return (
      <>
        <GridContainer>
          <TeamCard teams={this.state.teams} />
        </GridContainer>
      </>
    );
  }
}

export default Grid;
