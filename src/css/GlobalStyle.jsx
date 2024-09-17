import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style:none;
    text-decoration:none;
}
html{
    scroll-behavior:smooth;
}
body{
    background-color: #0d0722;
}
`
export default GlobalStyle