import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { AgendamentosStyle } from "../css/AgendamentosStyle";

const Agendamentos = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem("usuario");
        sessionStorage.removeItem("senha");
        alert("Saindo....")
        navigate("/")

    }


    return (
        <AgendamentosStyle>
            <section>
                <h1>Agendamentos</h1>
                <h2>Marque uma palestra escolar conosco</h2>
                <button className="btn" onClick={handleLogout}>
                    <MdLogout className="logout" />
                </button>
                <div className="linha"></div>
                <div className="Escolas">
                    <h2>Escolas Disponíveis</h2>
                    <div>
                        <button className="cards">
                            <h3>Escola Primária Verde Vale</h3>
                            <p>Cidade: Jardim do Sol <br />
                                Rua: Rua das Flores, 123</p>
                                <label><input type="checkbox" /></label>
                        </button>

                        <button className="cards">
                            <h3>Colégio Futuro Brilhante</h3>
                            <p>Cidade: Vila Esperança <br />
                                Rua: Avenida dos Sonhos, 4756</p>
                                <label><input type="checkbox" /></label>
                        </button>

                        <button className="cards">
                            <h3>Instituto Educacional Nova Geração</h3>
                            <p>Cidade: Cidade do Progresso <br />
                                Rua: Rua do Conhecimento, 789</p>
                                <label><input type="checkbox" /></label>
                        </button>
                    </div>
                </div>
                <div className="linha"></div>
            </section>
        </AgendamentosStyle>
    )
}
export default Agendamentos