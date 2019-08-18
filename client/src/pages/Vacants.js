import React from 'react'

import '../components/styles/vacants.css'

import Vacant from '../components/Vacants/Vacants'

class Vacants extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='padding-top'></div>
        <div className='vacant-content'>
          <div className='forms-vacants'>
            <form autoComplete='off'>
              <h3>Buscar por nombre</h3>
              <input type='text' className='form-vacant' placeholder='Nombre de vacante' />
              <button className='btn btn-red'>Buscar</button>        
            </form>
            <form autoComplete='off'>
              <h3>Categorías</h3>
              <select className='select'>
                <option value='administrationAndOffice'>Administración / Oficina</option>
                <option value='transportationAndLogistics'>Transportes / Logística</option>
                <option value='marketingAndGraphicsArts'>Mercadotecnia / Artes Gráficas</option>
                <option value='computerAndNetworks'>Informática / Redes</option>
                <option value='legalAndAdvice'>Legal / Asesorías</option>
                <option value='touristAndHospitality'>Turismo / Hostelería</option>
                <option value='educational'>Educativos</option>
                <option value='medicineAndHealth'>Medicina / Salud</option>
              </select>
              <button className='btn btn-red'>Buscar</button>
            </form>
          </div>
          <div className='vacants'>
            <h2 className='h2'>Vacantes disponibles</h2>
            <Vacant />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Vacants
