import styled from 'styled-components'

export const Container = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
    height:100%;
    margin:0 auto;
    padding:0;
    background-color: #000000;
    
    h1{
        padding-left:5%;
        width:fit-content;
        margin:0;
        a{
        display:flex;
        justify-content:end;
        width:fit-content;
            img{
            width: 10%;
            }
        }
    }
    
    ul{
        display:flex;
        list-style:none;
        padding-right:5%;
        li{
        list-style:none;
        margin-right: 5%;
            a{
                color:#FFF;
            }
        }
    }
    
    @media (min-width: 425px) {
        h1{
            
        }
    h2{
        width: 100%;
        display:flex;
        justify-content:center;
    }
   
}
@media (min-width: 1024px) {
    h2{
        width: 100%;
        display:flex;
        justify-content:center;
    }
    img{
        width: 20%;
    }
}
`
