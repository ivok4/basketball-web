import React, { useState, useEffect } from "react";
import {Container,
  SideBar
} from './styled'
import {Player} from '../../components'


const Team = ({data}) => { 
//console.log("esto es: " + data);

const [players, setPlayers] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [activePlayer, setActivePlayer] = useState([]);

//get the team players
useEffect(() => {
    fetch(`https://api.sportsdata.io/v3/nba/stats/json/Players/${data}?key=0138b6d456094a929e46d2a94aee14fe`, {})
      .then((res) => res.json())
      .then((response) => {
        setPlayers(response);
        setIsLoading(false);
        //console.log(`https://swapi.dev/api/people/${data}`)
      })
      .catch((error) => console.log(error));
  }, [data]);


// console.log(players);
// console.log(activePlayer);
    return(
        <Container>
          <SideBar>
            {!isLoading &&
              players.map((player, index) => {
            return (
                <img src={player.PhotoUrl} 

                onClick={() => {setActivePlayer(player) }}/>              
              );
            })}
          </SideBar>
          <Player data={activePlayer}/>
        </Container>
        
    )
}

export default Team