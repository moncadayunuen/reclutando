import React from 'react'
import { Link } from 'react-router-dom'

import '../../components/styles/panel.css'
import userDefaultImage from '../../assets/user.png'

function Panel () {
  const userLocalStorage = () => {
    const user = localStorage.getItem("userdata")
    return JSON.parse(user);
  }
  return (
    <React.Fragment>
      <div className='padding-top'></div>
      <div className='content-panel'>
        <div className='profile-user'>
          <div className='container-user'>
            <div className='avatar'>
              <img src={userDefaultImage} alt='User-Avatar' />
              <Link to='/cambiar-avatar' className='btn-small btn-yellow'>Cambiar avatar</Link>
            </div>
            <div className='user-info'>
              <p>Nombre: {userLocalStorage().user.name} {userLocalStorage().user.lastname}</p>
              <p>Correo: {userLocalStorage().user.email}</p>
              <Link className='btn-small btn-green' to='/editar-perfil'>Editar perfil</Link>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='profile-card'>
            <div className='profile-icon'><i className="fas fa-briefcase"></i></div>
            <Link className='profile-link' to='/nueva-vacante'><i className="fas fa-arrow-circle-right"></i> Nueva Vacante</Link>
            <Link className='profile-link' to='/vacantes-publicadas'><i className="fas fa-arrow-circle-right"></i> Vacantes publicadas</Link>
          </div>
          <div className='profile-card'>
            <div className='profile-icon'><i className="fas fa-user-plus"></i></div>
            <Link className='profile-link' to='/nuevo-usuario'><i className="fas fa-arrow-circle-right"></i> Nuevo Usuario</Link>
          </div>
          <div className='profile-card'>
            <div className='profile-icon'><i className="fas fa-users"></i></div>
            <Link className='profile-link' to='/empresas-registradas'><i className="fas fa-arrow-circle-right"></i> Empresas Registradas</Link>
          </div>
          <div className='profile-card'>
            <div className='profile-icon'><i className="fas fa-user-tie"></i></div>
            <Link className='profile-link' to='/perfiles-registrados'><i className="fas fa-arrow-circle-right"></i> Perfiles Registrados</Link>
        </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Panel
