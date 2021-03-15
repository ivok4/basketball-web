import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Oswald';
    src: url('/fonts/Oswald/Oswald-Regular.ttf') format('ttf'),
        url('/fonts/Chivo/Chivo-Regular.ttf') format('ttf');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Oswald';
    src: url('/fonts/Oswald/Oswald-Bold.ttf') format('ttf'),
        url('/fonts/Chivo/Chivo-Bold.ttf') format('ttf');
    font-weight: Bold;
    font-style: Bold;
}

`;
export default GlobalStyle;
