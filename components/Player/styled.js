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
        grid-template-columns: 50% 50%;
        p{
            margin:0 3%;
            color:#FFF;
            width:45%;
            float:left;
        }
        h2{
            margin:0 3%;
            color:#FFF;
            width:45%; 
        }
    }
}
/* div{
display:flex;
flex-direction:column;
color:#FFF;
width:50%;
height:70%;
    p{
        margin:0;
        font-size:20px;
        font-family: 'Oswald';
        color:#b8b9c2;
    }
    h1{
        margin:0;
        font-size:100px;
        font-family: 'Oswald Bold';
    }
    div{
        width:50%;
        color:#FFF;
        p{
            width:50%;
            color:#FFF;
        }
        h2{
            width:50%;
        }
    }
} */
`