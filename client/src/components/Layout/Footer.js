import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo_reclutando.png'
class Footer extends React.Component {
  render () {
    return (
      <footer>
        <div>
          <img src={logo} className='logo-footer' alt='' />
          <address>Street #7987 - Houshrefn, Texas</address>
          <div className='telephone'>+33 54 62 86 59</div>
        </div>
        <div>
          <h5>Links del Sitio</h5>
          <ul className='links-site'>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='nosotros'>Sobre Nosotros</Link></li>
            <li><Link to='vacantes'>Vacantes de empleo</Link></li>
            <li><Link to='perfiles'>Perfiles de Postulantes</Link></li>
            <li><Link to='registrar'>Registrarse</Link></li>
            <li><Link to='/ingresar'>Ingresar</Link></li>
          </ul>
        </div>
        <div className='social-media'>
          <h5>Redes Sociales</h5>
          <ul className='menu-social-media'>
            <li><Link to='/'><i className='fab fa-facebook-f'></i></Link></li>
            <li><Link to='/'><i className='fab fa-youtube'></i></Link></li>
            <li><Link to='/'><i className='fab fa-twitter'></i></Link></li>
            <li><Link to='/'><i className='fab fa-instagram'></i></Link></li>
          </ul>
        </div>        
      </footer>    
    )
  }
}

export default Footer
