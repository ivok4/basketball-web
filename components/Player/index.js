import React from 'react'
import {Container
} from './styled'

const Player = ({data}) => {
    const{
        FirstName,
        LastName,
        Height,
        Weight,
        BirthDate,
        BirthCity,
        BirthCountry,
        Jersey,
        PhotoUrl
    } = data

    console.log(data);

    return(
        <Container>
            <div className="playerInfo">
                <p>{FirstName}</p>
                <h1>{LastName}</h1>
                <div>
                    <p>Height</p>
                    <h2>{Height}</h2>
                    <p>Weight</p>
                    <h2>{Weight}</h2>
                    <p>Birth Country</p>
                    <h2>{BirthCountry}</h2>
                    <p>Birth Date</p>
                    <h2>{BirthDate}</h2>
                    <p>Birth City</p>
                    <h2>{BirthCity}</h2>
                    <p>Jersey</p>
                    <h2>{Jersey}</h2>
                </div>
            </div>
            <img src={PhotoUrl}/>
        </Container>
    )
}

export default Player