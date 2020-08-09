import React, { useState, FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Header from '../../components/Header'
import Inputs from '../../components/Input'

import './styles.css'

import { login } from '../../auth/tokens/token'

function Login() {
  const history = useHistory()

  const [ email, setEmail ] = useState<String>()
  const [ password, setPassword ] = useState<String>()

  function HandleFormSubmit(event: FormEvent) {
    event.preventDefault()

    const data = {
      email,
      password
    }

    console.log(data)

    login('pdsfjspdfojod')

    const path = localStorage.getItem('path')
    localStorage.removeItem('path')

    history.push(path || '/')
  }

  return (
    <div id="page-login">
      <Header title="Faça o login para acessar" >
      <main>
        <form onSubmit={HandleFormSubmit}>
          <Inputs
            type="email"
            name="email"
            label="E-mail"
            required
            changeState={setEmail}
          />

          <Inputs
            type="password"
            name="password"
            label="Senha"
            required
            changeState={setPassword}
          />

          <button type="submit">Entrar</button>

          <div className="others-options">
            <Link to="signup">
              Criar Conta!
            </Link>

            <Link to="forgot">
              Esqueci Minha Senha
            </Link>
          </div>
        </form>
      </main>
      </Header>

    </div>
  )
}

export default Login