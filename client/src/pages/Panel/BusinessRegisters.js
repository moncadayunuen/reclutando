import React from 'react';
import { Link } from 'react-router-dom'
import { getUsersBusiness } from '../../services/Users';

class BusinessRegisters extends React.Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    getUsersBusiness().then(data => this.setState({ users: data }))
  }
  render () {
    const { users } = this.state
    return (
      <React.Fragment>
        <div className='padding-top'></div>
        <div className='container'>
          <div>
            <Link to='/panel' className='btn-small btn-red'><i className="fas fa-arrow-left"></i> Regresar</Link>
          </div>
          <h3>Empresas Registradas</h3>
          <table className='table-hover'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
                <th><i className="fas fa-cog"></i></th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => 
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/ver/${user._id}`} className='link-blue'><i className="far fa-eye"></i></Link>
                    <Link to={`/eliminar/${user._id}`} className='link-red'><i className="far fa-trash-alt"></i></Link>
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

export default BusinessRegisters
