import React from 'react'
import {Card
} from './styled'

import { Link, BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";


const TeamCard = (props) => {
    const  teamInfos  = props.teams;
    console.log(teamInfos);

    return(
        <>
            {teamInfos.map((teamInfo,i)  => 
            <Card id={i}  style={{backgroundColor: "#"+teamInfo.PrimaryColor}} > 
            <Router>
                {/* <Link to={`/team/${teamInfo.Key}`}> */}
                <Link to={`/${teamInfo.Key}`}>

                    <img
                        src={teamInfo.WikipediaLogoUrl}
                    />
                    <h2 style={{color: "#"+teamInfo.SecondaryColor}}>{teamInfo.City} {teamInfo.Name}</h2>
                    </Link>
        <Switch>
          <Route path="/:id"  children={<Child />}/>
        </Switch>
            </Router>
            </Card>
            )}
           
        </>
    )
}

export default TeamCard

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
  
    return (
      <div>
        <h3>ID: {id}</h3>
      </div>
    );
  }