import React, { useState, useEffect } from "react";
import {Container
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
          {!isLoading &&
            players.map((player, index) => {
           return (
            <h5 key={index}>{player.FirstName}</h5>
          );
        })}
        </Container>
        
    )
}

export default Team