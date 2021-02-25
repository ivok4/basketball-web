import styled from 'styled-components'

export const Container = styled.div`
@media (min-width: 1024px) {
display:flex;
height: 100%;
background-color: #000;
position: relative;
justify-content:center;
align-items:center;
} 
@media (min-width: 1920px) {
    height: 80%;
}
div{
    width:60%;
    height:40%;
    h1{
        color:#FFF;
    }
    h2{
        color:#FFF;
    }
    img{
        width:20%;
    }
}

`