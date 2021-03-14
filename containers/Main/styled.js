import styled, { css } from 'styled-components';

export const Container = styled.div`
display:flex;
height: 100%;
background-color: #000;
position: relative;
div{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    .logoContainer{
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        height:fit-content;
        h2{
        color:#FFF;
        width:fit-content;
        height:fit-content;
        margin:0;
        font-size:50px;
        font-family: 'Oswald';
        display:flex;
        }
        img{
        width:7%;
        display:flex;
        margin:0 2%;
        float:left;
        }
    }
    h1{
        color:#FFF;
        width:90%;
        margin:0;
        font-size:30px;
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
@media (min-width: 1024px) {
justify-content:center;
align-items:center;
    div{
        width:80%;
        height:40%;
        .logoContainer{   
            h2{
            font-size:90px;
            }
            img{
            width:4%;
            }
        }
        h1{
            width:100%;
            font-size:80px;
        }
    }
} 
@media (min-width: 1920px) {
    height: 80%;
}

`