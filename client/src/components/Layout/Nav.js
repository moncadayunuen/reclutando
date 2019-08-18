import React from 'react';
import { Link } from 'react-router-dom';

import Logout from './Logout';
import logo from '../../assets/logo_reclutando.png';
import Auth from '../../helpers/Auth';

class NavBar extends React.Component {

  ifIsAuthenticated () {
    if (Auth.isAuthenticated()) {
      return <div className='menu-btns'>
        <Logout />
      </div>
    } else {
      return <div className='menu-btns'>
        <Link className='btn-register' to='/registrar'><i className='far fa-user'></i> Registrar</Link>
        <Link className='btn-login' to='/ingresar'><i className='fas fa-sign-in-alt'></i> Ingresar</Link>
      </div>
    }
  }

  render () {
    return (
      <div id='nav'>
        <Link to='/'><img src={logo} alt='Logo Reclutando' className='logo' /></Link>
        {this.ifIsAuthenticated()}
        <button className='menu-burger'><i className='fas fa-bars'></i></button>
      </div>
    )
  }
}

export default NavBar
