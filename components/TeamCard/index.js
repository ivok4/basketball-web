import React from 'react'
import {Card
} from './styled'

const TeamCard = (props) => {
    const  teamInfos  = props.teams;
    console.log(teamInfos);

    return(
        <>
            {teamInfos.map((teamInfo,i)  => 
            <Card id={i}  style={{backgroundColor: "#"+teamInfo.PrimaryColor}}> 
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