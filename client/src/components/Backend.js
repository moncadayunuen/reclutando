import React from 'react'
import { Link } from 'react-router-dom'

import './styles/panel.css'

import Nav from './Layout/Nav'
import Footer from './Layout/Footer'

function Backend (props) {
  const userLocalStorage = () => {
    const user = localStorage.getItem("userdata")
    return JSON.parse(user);
  }
  return (
    <React.Fragment>
      <Nav />
        <div className='padding-top'></div>
        <div className='content-panel'>
          <nav className='menu'>
            <div className='user-info'>
              <p className='user-name'>Usuario: {userLocalStorage().user.name}  {userLocalStorage().user.lastname}</p>
              <p className='user-email'>Correo: {userLocalStorage().user.email}</p>
            </div>
            <ul className='menu-user-links'>
              <li><Link to='/editar-perfil'>Editar perfil</Link></li>
              <li><Link to='/nueva-vacante'>Crear nueva vacante</Link></li>
              <li><Link to='/mis-vacantes'>Mis vacantes</Link></li>
              <li><Link to='/mis-postulaciones'>Mis postulaciones</Link></li>
              <li className='submenu'><button>Usuarios<i className="fa fa-angle-down ml-2" aria-hidden="true"></i></button>
                <ul>
                  <li className='menu-users-link'><Link to='/usuarios-empresas'>Empresas</Link></li>
                  <li className='menu-users-link'><Link to='/usuarios-postulantes'>Postulantes</Link></li>
                </ul>
              </li>
            </ul>
          </nav>
          <main>
            {props.children}
          </main>
        </div>
      <Footer />
    </React.Fragment>
  )
}

export default Backend