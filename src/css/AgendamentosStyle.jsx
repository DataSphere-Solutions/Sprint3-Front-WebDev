import styled from "styled-components";

export const AgendamentosStyle = styled.section`

    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');

    *{
        font-family: 'Outfit', sans-serif;
    }
    section{
        margin-top: -40px;
        height: 100vh;
        background-color: #06001a ;
    }
    
    h1{
        padding-top: 60px;
        font-size: 60px;
        text-align: center;
        color:white;
    }    
    h2{
        text-align: center;
        font-size: 30px;
        color:white;
    }
    .btn{
        color: #ffffff78;
        cursor: pointer;
        border:none;
        background-color:  #06001a11 ;
        font-size:40px;
        position:absolute;
        margin-top: -100px;
        margin-left: 13px;
        transition:all 0.7s;
    }
    .btn:hover{
        color: #ffffff;
    }
    .linha{
        background-color: #ffffff78;
        width: 90%;
        height: 4px;
        margin-top: 20px;
        border-radius:100px;
        margin-left: 5%;
    }
    
    .Escolas h2{
        margin-top: 20px;
        text-align: center;
        font-size: 35px;
        margin-bottom: 40px;
    }
    .Escolas{
        justify-content: center;
        text-align: center;
        display:block;
        margin-bottom: 60px;
    }
    .cards{
        margin-left: 1px;
        border: none;
        justify-content: center;
        padding: 10px;
        text-align: center;
        background-color: white;
        margin-bottom: 30px;
        width: 50%;
        border-radius: 10px;
        box-shadow: #00000061 0px 5px 10px;
        transition:all 0.2s;
    }
    .cards:hover{
        padding: 15px;
    }
    .cards h3{
        padding-bottom: 10px;
        font-size: 20px;
    }
    .cards p {
        font-size: 17px;
    }
    label input{
        cursor: pointer;
        position: absolute;
        margin-left: -20%;
        margin-top: -40px;
        transform: scale(1.5);
    }

    
    

`