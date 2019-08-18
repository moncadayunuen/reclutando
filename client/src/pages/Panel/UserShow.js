import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { updateUser, getUser } from '../../services/Users'

import '../../components/styles/register.css'

class UserShow extends Component {

  constructor (props) {
    super(props)
    this.state = { user: [] }
  }
  componentDidMount () {
    getUser().then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState( {
          user: data
        })
      })
  }
  render () {
    return (
      <React.Fragment>
        <div className='padding-top'></div>
        <section>
        <div className='container'>
          <Link to='/perfiles-registrados' className='btn-small btn-red'><i className="fas fa-arrow-left"></i> Regresar</Link>
        </div>
          <h2 className='h2'>Editar usuario</h2>
          <form className='form-register' autoComplete='off'>
            <input type='text' className='form-input-register' placeholder='Nombre' id='name' name='name' value={this.state.user.name} />
            <input type='text' className='form-input-register' placeholder='Apellido' id='lastname' name='lastname' value={this.state.user.lastname} />
            <input type='email' className='form-input-register' placeholder='Correo electrónico' id='email' name='email' value={this.state.user.email} />
            <input type='password' className='form-input-register' placeholder='*********' id='password' name='password' value={this.state.user.password} />
            <div className='box-center'>
              <button className='btn btn-red' onClick={this.handleSubmit}>Guardar</button>
            </div>
          </form>
        </section>
      </React.Fragment>
    )
  }
}

export default UserShow
