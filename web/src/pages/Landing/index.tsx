import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

import LogoImg from '../../assets/images/logo.svg'
import LandingImg from '../../assets/images/landing.svg'

import WorkIcon from '../../assets/images/icons/work.svg'
import NewWorkIcon from '../../assets/images/icons/new-work.svg'
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={LogoImg} alt="Proffy logo" />

          <h2>Sua plataforma de trabalho online.</h2>
        </div>

        <img
          src={LandingImg}
          alt="Plataforma de Estudos"
          className="hero-image"
        />

        <div className="btn-container">
          <Link to="work" className="work">
            <img src={WorkIcon} alt="Trabalho" className="icons" />
            Trabalho
          </Link>
          <Link to="new-work" className="new-work">
            <img src={NewWorkIcon} alt="Novo Trabalho" className="icons" />
            Novo Trabalho
          </Link>
        </div>

        <span className="total-connections">
          total de 200 conexões já realizadas <img src={PurpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  )
}

export default Landing