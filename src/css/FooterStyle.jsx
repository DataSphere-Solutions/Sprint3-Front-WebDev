import styled from "styled-components";

export const FooterStyle = styled.section`

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');


    .footer1{
        display: flex;
        color: #D0D0D0;
        background-color: #1e2227;
        justify-content: center;
        gap: 100px;
        padding-top: 30px;
        padding-left:20px ;
        padding-bottom: 3px;
        font-family: 'Outfit', sans-serif;
        text-decoration: none;
        padding-right: 40px;
    }

    .email{
        display: flex;
        gap:5px;
    }

    .insta{
        display: flex;
        gap:5px;
    }
    .insta a{
        color:#D0D0D0;
        padding-top: 4px;
        transition: 0.7s;
    }
    .insta a:hover{
        color:#ffffff;
        padding-top: 4px;
        transition: 0.7s;
    }
    .img{
        width: 160px;
        padding-bottom: 10px;
    }
    .imlogo{
        width: 60px;
    }
    .line{
        width: 3px;
        padding-bottom: 10px;
    }
    .Div1{
        margin-top: -10px;
    }
    .footer2{
        text-align: center;
        padding-top: 30px;
        background-color:#141418;
    }
    .navLink{
    font-size: 1rem;
    font-weight:700;
    padding-right: 20px;
    padding-left: 20px;
    color:#D0D0D0;
    font-family: Arial, Helvetica, sans-serif;
    transition: 0.7s;
    }

    .navLink:hover{
    color: #ffff;  
    transition: 0.7s;
    }
    h5{
        justify-content: center;
        color: #D0D0D0;
        padding-top: 40px;
        padding-bottom: 10px;
    }
`