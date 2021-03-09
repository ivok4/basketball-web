import React from 'react'
import {Container
} from './styled'



const Team = ({data}) => { 
    const {
        id
      } = data;
      console.log(data);
    return(
        <Container>
            <p>Hola</p>
        </Container>
        
    )
}

export default Team