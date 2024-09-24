import styled from "styled-components";

export const AtividadesStyle = styled.section`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Outfit', sans-serif;
    
}

.home{
    width: 100%; 
    
}

.container{
    z-index: 2;
    position: absolute;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    margin-top: -40px;
}
form{
    border-radius:5px;
    background: #fff;
    max-width: 500px;
    height: 450px;
    padding: 40px;
    text-align: center;
}
form p{
    text-align: center;
    margin-bottom: 25px;
}

@media (max-width:600px){
    
}
`;
