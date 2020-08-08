import React, { useState } from 'react'

import Header from '../../components/Header'
import Inputs from '../../components/Inputs'

import './styles.css'

function Login() {
  const [ nome, setNome ] = useState<String>()
  const [ email, setEmail ] = useState<String>()
  const [ password, setPassword ] = useState<String>()
  const [ confirmPassword, setConfirmPassword ] = useState<String>()

  return (
    <div id="page-login">
      <Header title="" />
      <h1>{nome}</h1>

      <h1>{email}</h1>
      <main>
        <form>
          <Inputs
            name="user_name"
            label="Nome"
            isRequired
            changeState={setNome}
          />

          <Inputs
            type="email"
            name="email"
            label="E-mail"
            isRequired
            changeState={setEmail}
          />

          <Inputs
            type="password"
            name="password"
            label="Senha"
            isRequired
            changeState={setPassword}
          />

          <Inputs
            type="password"
            name="ConfirmPassword"
            label="Confirmar Senha"
            isRequired changeState={setPassword}
          />

          <button type="submit">Enviar</button>
        </form>
      </main>
    </div>
  )
}

export default Login