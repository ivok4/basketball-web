import styled, { css } from 'styled-components';

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
    align-items:center;
    .logoContainer{
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        h2{
        color:#FFF;
        width:fit-content;
        height:fit-content;
        margin:0;
        font-size:90px;
        font-family: 'Oswald';
        display:flex;
        }
        img{
        width:4%;
        display:flex;
        margin:0 2%;
        float:left;
        }
    }
    h1{
        color:#FFF;
        width:100%;
        margin:0;
        font-size:80px;
        font-family: 'Oswald';
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
    }
    
    p{
        color:#FFF;
        margin:0;
        font-family: 'Oswald';
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
    }
}

`