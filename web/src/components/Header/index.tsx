import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

interface Props {
  title: string
}

const PageHeader: FC<Props> = ({ title, children }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>

        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <h1>{title}</h1>

        {children}
      </div>
    </header>
  )
}

export default PageHeader