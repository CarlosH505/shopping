import { useNavigate } from "react-router-dom"
import '../styles/Login.css'


function Login() {
    const navigate = useNavigate()

    function click() {
        navigate("/products")
    }
 

    return (
        <div className="cont">
            <div className="container">

                <div className="tipo">

                    <a href="#" className="login">Login</a>
                    <a href="#" className="registrar">registra-se</a>

                </div>


                <div className="inp">

                    <div className="input">
                        <img src="\user.png" alt="" className="iconEmail" />

                        <input type="email" className="email" placeholder="Email" />

                    </div>

                    <div className="input">
                        <img src="\lock.png" alt="" className="iconSenha" />

                        <input type="password" className="senha" placeholder="Senha" />
                    </div>

                </div>

                <div className="esqueceu">
                    <a href="#">Esqueceu a senha?</a>
                </div>




                <div className="botao" >
                    <button onClick={click}>Entrar</button>
                </div>

            </div>



        </div>


    )

}
export default Login