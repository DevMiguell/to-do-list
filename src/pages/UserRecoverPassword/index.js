import React, { useState } from 'react'

import firebase from '../../config/firebase'
import 'firebase/auth'

import { ContainerGlobal } from '../Home/styles'
import { RecoverStyle } from './styles'

function UserRecoverPassword() {
    const [email, setEmail] = useState()
    const [msg, setMsg] = useState()

    function recuperarSenha() {
        firebase.auth().sendPasswordResetEmail(email).then(resultado => {
            setMsg('Enviamos um link no seu email para você redefinir sua senha!')
        }).catch(erro => {
            setMsg('Verifique se o email está correto!')
        })
    }

    return (
        <ContainerGlobal>
            <RecoverStyle>
                <form>
                    <h1>Recuperar Senha</h1>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email" />

                    <div>
                        <span>{msg}</span>
                    </div>

                    <button onClick={recuperarSenha} type="button">Recuperar Senha</button>
                </form>
            </RecoverStyle>
        </ContainerGlobal>
    )
}

export default UserRecoverPassword