import styled from "styled-components";

export const SlideshowStyleResp = styled.header`

.slideshow {
    display: none;
    margin-top: -40px;
    z-index:-1;
    background-color:black;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    
}

.slideshow img {
    width: 100%;
    height: auto; 
    object-fit: cover;
}

.animated {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
@media (max-width:600px) {
    .slideshow {
    display: flex;
    
}
}
`