import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <div>
        <div className='header'>
          <div className='box-header'>
            <h1>BUSCA TU OPORTUNIDAD LABORAL</h1>
          </div>
        </div>
        <nav className='main-search'>
          <form className='form-main-search' autoComplete='off'>
            <input type='text' className='input-search-left' placeholder='Buscar vacante' />
            <input type='text' className='input-search-right' placeholder='Buscar por ciudad' />
            <button type='submit' className='btn-main-search'><i className='fas fa-search'></i> Buscar</button>
          </form>
        </nav>
      </div>
    )
  }
}

export default Header
