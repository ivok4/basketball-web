import React from 'react';
import { TeamCard } from '../../components';

class Grid extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      teams:[],
      teamsBkp:[],
      loading:true,
      filter:''
    }
    //this.applyFilter = this.applyFilter.bind(this)
  }
  
  async componentDidMount(){
    try {
      const response = await fetch('https://api.sportsdata.io/v3/nba/scores/json/teams?key=0138b6d456094a929e46d2a94aee14fe')
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json()
      //console.log(json)
      this.setState({
        teams:json,
        loading:false
      })
    } catch (error) {
      //console.log(error)
    }

  }

//   applyFilter(e){
//     console.log(e.target.value)
//     const filtro = this.state.peliculas.filter(pelicula => {
//       //return( pelicula.titulo === e.target.value )
//       return (pelicula.titulo.includes(e.target.value))
//     })
//     console.log(filtro)
//     // this.setState({
//     //   filter:e.target.value
//     // })
//   }

  render() {
    return (
      <>
        {/* { this.state.teams.map(team => <TeamCard key={team.id} data={team}/>)}  */}
        <TeamCard teams={this.state.teams} />

      </>
    );
  }
}

export default Grid;
