import { useState } from 'react'

import firebase from '../../config/firebase'
import 'firebase/auth'

import { ContainerGlobal } from '../Home/styles'
import { NewUserContainer } from './styles'


const NewUser = () => {
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [msgTipo, setMsgTipo] = useState()
  const [msg, setMsg] = useState()
  const [carregando, setCarregando] = useState()

  function cadastrar() {
    setMsgTipo(null)
    if (!email || !email) {
      setMsgTipo('erro')
      setMsg('Voce precisa informar o email e senha para fazer um cadastro!')
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, senha).then(resutado => {
      setCarregando(0)
      setMsgTipo('sucesso')
    }).catch(erro => {
      setCarregando(0)
      setMsgTipo('erro')
      // Criando cada caso para a mensagem de erro
      switch (erro.message) {
        case 'Password should be at least 6 characters':
          setMsg('A senha deve ter pelo menos 6 caracteres!');
          break;
        case 'The email address is already in use by another account.':
          setMsg('Este email já está sendo utilizado por outro usuário!');
          break;
        case 'The email address is badly formatted.':
          setMsg('O formato do seu email é inválido!');
          break;
        default:
          setMsg('Não foi possível cadastrar. Tente novamente mais tarde!');
          break;
      }
    })
  }

  return (
    <>
      <ContainerGlobal>
        <NewUserContainer>
            <form className="">
              <h1>Cadastrar novo usuario</h1>

              <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email" />
              <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="Senha" />

              {
                carregando ? <div className="" role="status"><span>Loading...</span></div>
                  : <button onClick={cadastrar} type="button" className="w-100 btn btn-lg btn-cadastro">Cadastrar</button>
              }
              <div className="">
                {/* Se oque estiver dentro de msgTipo for sucesso &&(entao) mostre ... */}
                {msgTipo === 'sucesso' && <span><strong>WoW! </strong>Usuario cadastrado com sucesso! </span>}
                {msgTipo === 'erro' && <span><strong>Ops! </strong> {msg} </span>}
              </div>
            </form>
        </NewUserContainer>
      </ContainerGlobal>
    </>
  )
}

export default NewUser
