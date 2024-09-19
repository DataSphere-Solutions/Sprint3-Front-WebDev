import { HomeStyle } from "../css/HomeStyle"
import Slideshow from '../routes/Slideshow';

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
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, quod? Dolore porro, accusantium aspernatur neque provident nulla veniam expedita quos hic tempora quidem repellat quisquam et modi ratione, exercitationem quibusdam!</p>
                    </form>
                </div>
            </section>

            <section class="form-container">
                <div class="container2">
                    <form className="form2">
                        <Slideshow></Slideshow>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, quod? Dolore porro, accusantium aspernatur neque provident nulla veniam expedita quos hic tempora quidem repellat quisquam et modi ratione, exercitationem quibusdam!</p>
                    </form>
                </div>
            </section>
        </HomeStyle>

    )
}
export default Home