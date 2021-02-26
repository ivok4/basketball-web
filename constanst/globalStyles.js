import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Oswald';
    src: url('/fonts/Oswald/Oswald-Regular.ttf') format('ttf'),
        url('/fonts/Chivo/Chivo-Regular.ttf') format('ttf');
    font-weight: normal;
    font-style: italic;
}

`;
export default GlobalStyle;
