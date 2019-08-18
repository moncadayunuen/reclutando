import React from 'react'

function Newsletter () {
  return (<div>
    <div className='newsletter'>
      <div className='newsletter-bg'>
        <h2>¡RECIBE NUEVAS VACANTES DE TU INTERÉS!</h2>
        <form className='form-newsletter'>
          <input type='email' className='form-input-newsletter' placeholder='Correo electrónico' />
          <button className='btn btn-green'>Suscribirse</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Newsletter
