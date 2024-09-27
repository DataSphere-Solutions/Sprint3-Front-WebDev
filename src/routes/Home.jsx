import { HomeStyle } from "../css/HomeStyle"


const Home = () => {
    return (

        <HomeStyle>
            <section class="form-container">
                <div class="container">
                    <form>
                        <div className="logos">
                            <img className="fe" src="./src/assets/Formula_E_2017 1.png" alt="" />
                            <img className="dot" src="./src/assets/dot.png" alt="" />
                            <img className="mahindra" src="./src/assets/mahindra.png" alt="" />
                        </div>
                        <p>A tech Mahindra em parceria com a Formula E colaboram no desenvolvimento de soluções tecnológicas e digitais que aprimoram a experiência da Formula E no Brasil. As mesmas colaboraram com a Data Sphere Solutions para expandir a popularidade da categoria no País.</p>
                    </form>
                </div>
            </section>

            <section class="form-container">
                <div class="container2">
                    <form className="form2">
                        <h2>O que é a Data Sphere?</h2>
                        <img src="./src/assets/data.png" alt="" />
                        <p>Data Sphere é uma empresa fictícia criada para simular uma equipe do mercado representando a nossa equipe para as entregas dos trabalhos, pensamos em algumas ideias e soluções para este problema. Para mais informações, veja a página de <a href="/atividades">Atividades</a>. </p>
                    </form>
                </div>
            </section>
        </HomeStyle>

    )
}
export default Home