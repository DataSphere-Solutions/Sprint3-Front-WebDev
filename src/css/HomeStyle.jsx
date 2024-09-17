import styled from "styled-components";

export const HomeStyle = styled.section`

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');

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
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    background-image: url('./src/assets/imagem.png');
    background-size: cover;
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

.logos{
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-left: 45px;
    margin-top:-14px;
}

.fe{
    width: 120px;
    height: 90px;
    margin-top:10px;
}
.dot{
    width: 15px;
    height: 15px;
    margin-top: 50px;
    margin-left: 20px;
}
.mahindra{
    width: 200px;
    margin-bottom: 10px;
}
form p{
    text-align: center;
    margin-bottom: 25px;
}


.container2{
    height: 110vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    background-image: url('./src/assets/Frame 2.png');
    background-size: cover;
    
}

.form2{
    border-radius:5px;
    background: #fff;
    max-width: 600px;
    height: 700px;
    padding: 40px;
    text-align: center;
}

.logos2{
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-left: 45px;
    margin-top:-14px;
}

.fe{
    width: 120px;
    height: 90px;
    margin-top:9px;
}

`

