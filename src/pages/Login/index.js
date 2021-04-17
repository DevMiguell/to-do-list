import { ContainerGlobal } from "../Home/styles";
import { LoginContainer } from "./styles"

import todoImg from "../../assets/todoImg.svg"

function Login() {
  return (
    <ContainerGlobal>
      <LoginContainer>
        <form>
          <input onChange=""
            type="email"
            id="inputEmail"
            className=""
            placeholder="Email" />

          <input onChange=""
            type="password"
            id="inputPassword"
            className=""
            placeholder="Password" />

          <button onClick="" className="" type="button">Login</button>
        </form>
        <div>
          <img src={todoImg} alt="Todo Imagem" />
        </div>
      </LoginContainer>
    </ContainerGlobal>
  )
}

export default Login
