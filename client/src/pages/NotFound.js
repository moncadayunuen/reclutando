import React from 'react'
import { Link } from 'react-router-dom'

import img404 from '../assets/404.png'

class NotFound extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='not-found'>
          <img src={img404} alt='Page not found' />
          <h2>Error 404</h2>
          <h1>Page not found</h1>
          <Link to='/' className='btn btn-green'>Ir a Inicio</Link>
        </div>
      </React.Fragment>
    )
  }
}

export default NotFound
