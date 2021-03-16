import styled from 'styled-components'



export const Card = styled.div`
width:80%;
height:200px;
background-color:#FFF;
margin:2%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
h2{
    font-size:10px;
}
img{
    width:70%;
}
@media (min-width: 768px) {
    height:300px;
    }
    img{
    width:60%;
    }
    h2{
    font-size:15px;
}
@media (min-width: 1024px) {
    height:300px;
    h2{
    font-size:20px;
    }
    img{
    width:40%;
    }
}
`