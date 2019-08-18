import React from 'react'

import '../components/styles/vacants.css'

import Profile from '../components/Profile/Profile'

class Applicants extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='padding-top'></div>
        <div className='vacant-content'>
          <div className='forms-vacants'>
            <form autocomplete='off'>
              <h3>Buscar por nombre</h3>
              <input type='text' className='form-vacant' placeholder='Profesión' />
              <button className='btn btn-red'>Buscar</button>
            </form>
          </div>
          <div className='vacants'>
            <h2 className='h2'>Perfiles</h2>
            <Profile />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Applicants
