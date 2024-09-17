import styled from "styled-components";

export const LoginStyle = styled.section`

min-height: 90vh;
background-image: linear-gradient(to top, #0075b9, #19abff);


.section{
  display: flex;
  justify-content: center;
  padding-top:81px ;
}
#userhtml{
    text-align: center;
    padding: 2PX 3PX 2PX 3PX;
    border-radius: 10px;
    background-color: rgba(255, 63, 89, 0);
    border: 10px solid #0072f5;
    color: #ffffff;
    cursor: pointer;
    font-size: 40px;
    font-weight: 600;
    transition:all 0.3s;
    margin-right: 80px;
    width: 80%;
    
}
#userhtml::placeholder{
  color: #ffffff;
}
#userhtml:hover{
  transform: translateY(-10px);
  background-color: #0072f5;
}

#senhahtml{
  text-align: center;
  padding: 2PX 3PX 2PX 3PX;
  border-radius: 10px;
  background-color: rgba(255, 63, 89, 0);
  border: 10px solid #0072f5;
  color: #ffffff;
  cursor: pointer;
  font-size: 40px;
  font-weight: 600;
  transition:all 0.3s;
  margin-left: 100px;
  width: 80%;
}

#senhahtml::placeholder{
color: #ffffff;
}
#senhahtml:hover{
transform: translateY(-10px);
background-color: #0072f5;
color: #ffffff;
}
.confirmacao {
  display: flex;
  justify-content: center;
  margin-right: 40px;
}

#entrar{
  padding: 5PX 50PX 5PX 50PX;
    border-radius: 10px;
    background-color: rgba(255, 63, 89, 0);
    border: 10px solid #0072f5;
    color: #ffffff;
    cursor: pointer;
    margin-left: 20px;
    font-size: 50px;
    font-weight: 600;
    transition:all 0.3s;
    margin-bottom: 70px;
    margin-top: 50px;
}

#entrar:hover{
  transform: translateY(-10px);
  background-color: #0072f5;
}
`
