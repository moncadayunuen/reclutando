import React from 'react';
import { Link } from 'react-router-dom'
import { getVacants } from '../../services/Vacants';

class VacantsRegisters extends React.Component {
  constructor() {
    super()
    this.state = {
      vacants: []
    }
  }

  componentDidMount () {
    getVacants().then(data => this.setState({ vacants: data }))
  }
  render () {
    const { vacants } = this.state
    return (
      <React.Fragment>
        <div className='padding-top'></div>
        <div className='container'>
          <div>
            <Link to='/panel' className='btn-small btn-red'><i className="fas fa-arrow-left"></i> Regresar</Link>
          </div>
          <h3>Vacantes Registradas</h3>
          <table className='table-hover'>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Descripción</th>
                <th>Salario</th>
                <th><i className="fas fa-cog"></i></th>
              </tr>
            </thead>
            <tbody>
              {vacants.map(vacant => 
                <tr key={vacant._id}>
                  <td>{vacant.title}</td>
                  <td>{vacant.description}</td>
                  <td>{vacant.salary}</td>
                  <td>
                    <Link to={`/ver-vacante/${vacant._id}`} className='link-blue'><i className="far fa-eye"></i></Link>
                    <Link to={`/eliminar-vacante/${vacant._id}`} className='link-red'><i className="far fa-trash-alt"></i></Link>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    )
  }
}

export default VacantsRegisters
