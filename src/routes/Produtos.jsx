
const Produtos = () => {
  return (
    <ProdutosStyle>
      <link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet"></link>
      <section className="produtos-esportivos">
        <div className='div'>
          <img className='img' src="../src/assets/Chuteira.png" alt="Tênis esportivo" />
          <h3>Têcu mole Esportivo</h3>
          <p className='p'>
            Confortável e resistente, ideal para corridas de longa distância. Feito com
            materiais leves e tecnologia avançada para garantir o melhor desempenho em
            suas atividades físicas.
          </p>
          <div className='valor'>
            <p className='precoveio'>R$450,00</p>
            <p className='preco'>R$405,00</p>
            <p className='desconto'>10% de Desconto</p>
          </div>
        </div>

        <div className='div'>
          <img className='img' src="../src/assets/Bola.png" alt="Bola de Futebol" />
          <h3>Bola de Futebol</h3>
          <p className='p'>
            Bola de futebol de alta qualidade, projetada para proporcionar controle
            preciso e durabilidade em todas as condições. Perfeita para partidas
            profissionais ou amadoras.
          </p>
          <div className='valor'>
            <p className='precoveio'>R$230,00</p>
            <p className='preco'>R$207,00</p>
            <p className='desconto'>10% de Desconto</p>
          </div>
        </div>

        <div className='div'>
          <img className='img' src="../src/assets/camiseta.png" alt="Camisa de time" />
          <h3>Camisa de time</h3>
          <p className='p'>
            Camisa extremamente leve, para praticar esportes e estar na moda com seu
            time preferido. Modfelo seleção brasileira 2024.Perfeita para as Olimpíadas.
          </p>
          <div className='valor'>
            <p className='precoveio'>R$330,00</p>
            <p className='preco'>R$300,00</p>
            <p className='desconto'>10% de Desconto</p>
          </div>
        </div>
      </section>
    </ProdutosStyle>
  );
};

export default Produtos;
