import { ContainerGlobal } from "../Home/styles";
import { LoginContainer } from "./styles"

import React, { useState } from 'react';

import { Link, Redirect } from 'react-router-dom';

import firebase from '../../config/firebase';
import 'firebase/auth';

import { useSelector, useDispatch } from 'react-redux';

import todoImg from "../../assets/todoImg.svg"
import Logo from "../../assets/Logo.svg"

function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();

  const dispatch = useDispatch();

  function logar() {

    firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
      setMsgTipo('sucesso')
      dispatch({ type: 'LOG_IN', usuarioEmail: email })
    }).catch(erro => {
      setMsgTipo('erro')
    });

  }
  return (
    <ContainerGlobal>
      {useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/home' /> : null}


      <LoginContainer>
        <form>
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <input onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="inputEmail"
            class="form-control my-2"
            placeholder="Email"
          />

          <input onChange={(e) => setSenha(e.target.value)}
            type="password"
            id="inputPassword"
            class="form-control my-2"
            placeholder="Senha"
          />

          <button onClick={logar} className="" type="button">Login</button>

          <Link to='newuser' className="newUser">
            <strong> Não Tenho Cadastro</strong>
          </Link>

          <div className="msgError">
            {msgTipo === 'erro' && <span><strong>Ops!</strong> Senha ou usuário estão incorretos! 
            <Link to="/usuariorecuperarsenha" className="PassRecLink"> Recuperar Senha</Link>
            </span>}
          </div>
        </form>
        <div>
          <img src={todoImg} alt="Todo Imagem" />
        </div>
      </LoginContainer>
    </ContainerGlobal>
  )
}

export default Login
