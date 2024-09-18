import styled from "styled-components";

export const ProdutosStyle = styled.section`
min-height: 90vh;
background-image: linear-gradient(to top, #0075b9, #19abff);

  .produtos-esportivos {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding: 20px;
    border-radius: 8px;
  }

  .div {
    width: 30%;
    background-color: #3f99ff;
    border: 1px solid #3e76f0;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .produtos-esportivos img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 15px;
  }

  .produtos-esportivos h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
    font-family: "Bungee", sans-serif; 
  }

  .p {
    font-size: 1rem;
    color: #22426d;
    line-height: 1.5;
    font-family: "Bungee", sans-serif; 
  }

  .bungee-regular {
    font-family: "Bungee", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  div img {
    background-color: #19abff;
    
  }

  .valor{
    display: flex;
    justify-content: center;
    gap: 10px;
    font-family: "Bungee", sans-serif; 
  }
  .precoveio{
    margin-top: 4px;
    color: #337594;
    text-decoration: line-through;
  }
  .preco{
    font-size: larger;
  }
  .desconto{
    font-size: small;
    background-color: #ff0000cf;
    margin-top: 2px;
    color:white;
    padding: 4px;
    border-radius: 7px;
    margin-left: -6px;
  }
`;
