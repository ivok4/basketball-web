import React, { useState, useEffect } from "react";
import {Container,
  SideBar
} from './styled'



const Team = ({data}) => { 
//console.log("esto es: " + data);

const [players, setPlayers] = useState([]);
const [isLoading, setIsLoading] = useState(true);

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

console.log(players);
    return(
        <Container>
          <SideBar>
            {!isLoading &&
              players.map((player, index) => {
            return (
                <img src={player.PhotoUrl}/>              
              );
            })}
          </SideBar>
          <div>
            <p>Bradley</p>
            <h1>Beal</h1>
            <p>Height</p>
            <h2>7,5</h2>
            <p>Weight</p>
            <h2>207</h2>
            <p>Birth Country</p>
            <h2>Usa</h2>
            <p>Birth Date</p>
            <h2>1993-06-28T00:00:00</h2>
            <p>Birth City</p>
            <h2>St. Louis</h2>
            <p>Jersey</p>
            <h2>3</h2>
          </div>
        </Container>
        
    )
}

export default Team