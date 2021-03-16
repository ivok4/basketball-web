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
        font-size:20px;
        font-family: 'Oswald';
        color:#b8b9c2;
    }
    h1{
        margin:3%;
        font-size:50px;
        font-family: 'Oswald Bold';
    }
    div{
        width:100%;
        height:100%;
        display:grid;
        grid-template-columns: 35% 75%;
        margin:0 3%;
        align-items:center;
        justify-content:center;
        p{
            width:90%;
            float:left;
            font-size:15px;
        }
        h2{
            color:#FFF;
            width:90%; 
            font-size:15px;
        }
    }
}

img{
    width:30%;
}
@media (min-width: 768px) {
.playerInfo{
p{
        font-size:30px;
    }
    h1{
        font-size:100px;
    }
    div{
        p{
            width:45%;
            font-size:20px;
        }
        h2{
            width:45%; 
            font-size:20px;
            }
        }
    }
}
`