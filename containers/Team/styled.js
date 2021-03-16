import styled, { css } from 'styled-components';

export const Container = styled.div`
display:flex;
height: 94vh;
background-color: #FFF;
`

export const SideBar = styled.div`
background-color:#000;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
width:15%;
height:100%;
img{
    width:60%;
    height:5.7%;
    border-radius:50%;
}
@media (min-width: 768px) {
    width:10%;
}
@media (min-width: 1024px) {
    width:5%;
}
`
