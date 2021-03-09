import React from 'react'
import {Card
} from './styled'
import {Team} from '../../containers'
import { useRouter } from 'next/router'


import { Link, BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";


const TeamCard = (props) => {
    const  teamInfos  = props.teams;
    //console.log(teamInfos);

    const router = useRouter()


    return(
        <>
            {teamInfos.map((teamInfo,i)  => 
            <Card id={i}  style={{backgroundColor: "#"+teamInfo.PrimaryColor}} 
            //onClick={() => router.push('/planeta/' + teamInfo.Key)} 
            //onClick={() => router.push('/team')} 
            //onClick={() => router.push('/post/abc')}
            onClick={() => {
              router.push({
                pathname: '/post/[pid]',
                query: { pid: teamInfo.Key },               
              })
            }}
            > 
                    <img
                        src={teamInfo.WikipediaLogoUrl}
                    />
                    <h2 style={{color: "#"+teamInfo.SecondaryColor}}>{teamInfo.City} {teamInfo.Name}</h2>
                    
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