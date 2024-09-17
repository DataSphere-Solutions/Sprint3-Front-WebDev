import { LoginStyle } from "../css/LoginStyle.jsx"; // Certifique-se de que o caminho está correto
import { useRef } from 'react';
import Cliente from '../components/Cliente';

const Login = () => {
    const usuario = useRef();
    const senha = useRef();

    const getUsuario = sessionStorage.getItem("usuario");
    const getSenha = sessionStorage.getItem("senha");

    const handleLogin = (event) => {
        event.preventDefault();

        if (usuario.current.value === "Admin" && senha.current.value === "123456") {
            let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
            sessionStorage.setItem("usuario", "Admin");
            sessionStorage.setItem("senha", token);
            window.location.reload();
        } else {
            alert("Usuário/Senha INVÁLIDO");
        }
    };

    return (
        <>
            <LoginStyle>
                {getUsuario && getSenha ? (
                    <Cliente />
                ) : (
                    <form onSubmit={handleLogin}>
                        <section className="section">
                            <p>
                                <input type="text" placeholder="Digite seu usuário" ref={usuario} id="userhtml" />
                            </p>
                            <p>
                                <input type="password" placeholder="Digite sua senha" ref={senha} id="senhahtml" />
                            </p>
                        </section>

                        <div className="confirmacao">
                            <button type="submit" id="entrar">Entrar</button>
                        </div>

                    </form>
                )}
            </LoginStyle>
        </>
    );
};

export default Login;
