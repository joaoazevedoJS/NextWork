import React from 'react'
import { FiMail } from 'react-icons/fi'

import './styles.css'

const WorkItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
          alt="Empresa"
        />

        <div>
          <strong>Criação de um site web</strong>
          <span>Javascript | HTML | CSS</span>
        </div>
      </header>

      <p>
        Cria um site onde precise mostrar os produtos da minha loja.
        <br /> <br />
        Tenho layout do site!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 70,00</strong>
        </p>

        <button type="button">
          <FiMail className="mailIcon" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default WorkItem