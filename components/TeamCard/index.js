import React from 'react'
import {Container
} from './styled'

const TeamCard = (props) => {
    const  teamInfos  = props.teams;
    console.log(teamInfos);


    return(
        <Container>
            {teamInfos.map((teamInfo,i)  => 
            <>
            <p>{teamInfo.City}</p>
            </>
            )}




           {/*  { teamInfos.map((teamInfo,i)  => 
                <Container> 
                  <div className="info" id={`${team.id}`}  TeamID={`${TeamID}`}>
                    
                    <div
                    className="name"
                        contentEditable={contentEditable}
                        //onInput={e => console.log('Text inside div', e.currentTarget.textContent)}
                        onInput={e => handleChangeName(e.currentTarget.textContent)}
                        >
                            {teams.animalName}
                        </div>
                    <hr></hr>
                    <div
                    className="description"
                        contentEditable={contentEditable}
                        //onInput={e => console.log('Text inside div', e.currentTarget.textContent)}
                        onInput={e => handleChangeDescription(e.currentTarget.textContent)}

                        >
                            {animal.description}
                        </div>
                    <hr></hr>
                    <div>
                        <button 
                        className="guardar"
                        onClick={() => onSubmit(animal, i)}>GUARDAR</button>
                        <button className="eliminar"
                        onClick={() => handleEdit(animal)}>EDITAR</button>
                    </div>  
                </div> 
                </Container>
                )}*/}
        </Container>
    )
}

export default TeamCard