import Slideshow from '../routes/Slideshow';
import Slideshowresp from './Slideshowresp';
import { AtividadesStyle } from '../css/AtividadesStyle';
import React from 'react';
import SlideshowText from './SlideshowText';


const Atividades = () => {
  const texts = [
    "Bem-vindo à página de Atividades!",
    "Aqui você pode ver nossos eventos.",
    "Participe das nossas oficinas!",
    "Entre em contato para mais informações."
  ];

  return (
    <AtividadesStyle>
      <section>
      <section class="form-container">
                <div class="container">
                    <form>
                    <SlideshowText texts={texts} interval={5000} />
                    </form>
                </div>
            </section>

        <Slideshow></Slideshow>
        <Slideshowresp></Slideshowresp>
      </section>
    </AtividadesStyle>
  );
};

export default Atividades;
