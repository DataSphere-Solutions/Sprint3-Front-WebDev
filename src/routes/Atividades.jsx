import Slideshow from '../routes/Slideshow';
import { AtividadesStyle } from '../css/AtividadesStyle';
import React from 'react';
import SlideshowText from './SlideshowText';
import SlideshowResp from './SlideshowResp';


const Atividades = () => {
  const texts = [
    "Bem-vindo à página de Atividades Escolares ",
    "Palestras",
    "Corridas",
    "Prêmios"
  ];

  const texts2 = [
    "pau no meu cu pau no meu cu pau no meu cu pau no meu cu pau no meu cu pau no meu cu pau no meu cu pau no meu cu pau no meu cu pau no meu cu pau no meu cu pau no meu cu pau no meu cu pau no meu cu pau no meu cu pau no meu cu ",
    "pau no meu cu",
    "pau no nosso cu v v pau no nosso cu pau no nosso cu",
    "pau no mwefefefsfsfasdfwrfgfvsfvsrfu cu"
  ];

  return (
    <AtividadesStyle>
      <section>
        <section className="form-container">
          <div className="container">
            <form>
              <img src="./src/assets/data.png" alt="" />
              <div className='slide1'>
                <SlideshowText texts={texts} interval={5000} />
              </div>

              <div className='slide2'>
                <SlideshowText texts={texts2} interval={5000} />
              </div>
            </form>
          </div>
        </section>

        <Slideshow></Slideshow>
        <SlideshowResp></SlideshowResp>
      </section>
    </AtividadesStyle>
  );
};

export default Atividades;
