import React from 'react'

class Profile extends React.Component {
  render () {
    return (
      <div className='vacant-card'>
        <div className='img-vacant'>
          <img src='https://ui-avatars.com/api/?name=Vacant+Available' alt='Vacant' />
        </div>
        <div className='content-card'>
          <div className='info-vacant-card'>
            <h2 className='h2'>Titulo de vacante</h2>
            <h3>Empresa</h3>
          </div>
          <div className='date-vacant-card'>
            <p>Fecha: 00/00/00</p>
            <a href='/' className='btn btn-red'>Ver</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
