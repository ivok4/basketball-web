import styled from 'styled-components'

export const Container = styled.div`
    min-height: 100vh;
  display: flex;
  grid-template-rows: auto 1fr auto;
  background-color: #000000;
  width:100vh;
`
export const GridContainer = styled.div`
    display:grid;
    width:100%;
    height:fit-content;
    background-color: #F3F7FA;
    grid-template-columns: 25% 25% 25% 25%;
    padding: 0 2%;
    
`