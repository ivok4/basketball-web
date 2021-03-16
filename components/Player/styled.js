import styled from 'styled-components'

export const Container = styled.div`
height: 94vh;
width:100%;
background-color: #161725;
display:flex;
align-items:center;
.playerInfo{
display:flex;
flex-direction:column;
color:#FFF;
width:50%;
height:70%;
margin-left:3%;
p{
        margin:0 3%;
        font-size:30px;
        font-family: 'Oswald';
        color:#b8b9c2;
    }
    h1{
        margin:3%;
        font-size:100px;
        font-family: 'Oswald Bold';
    }
    div{
        width:100%;
        height:30%;
        display:grid;
        grid-template-columns: 35% 75%;
        margin:0 3%;

        p{
            width:45%;
            float:left;
            font-size:20px;
        }
        h2{
            color:#FFF;
            width:45%; 
            font-size:20px;
        }
    }
}

img{
    width:30%;
}
`