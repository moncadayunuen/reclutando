import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { userRegister } from '../../services/Users'

import '../../components/styles/register.css'

class UserRegister extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      lastname: '',
      email: '',
      password: '',
      roleUser: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    const { name, lastname, email, password, roleUser } = this.state
    userRegister({
      name: name,
      lastname: lastname,
      email: email,
      password: password,
      roleUser: roleUser
    })
      .then(res => {
        console.log('User registered')
      })
  }

  handleChange (e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  render () {
    return (
      <React.Fragment>
        <div className='padding-top'></div>
        <section>
        <div className='container'>
          <Link to='/panel' className='btn-small btn-red'><i className="fas fa-arrow-left"></i> Regresar</Link>
        </div>
          <h2 className='h2'>Crear nuevo usuario</h2>
          <form className='form-register' autoComplete='off'>
            <input type='text' className='form-input-register' placeholder='Nombre' id='name' name='name' value={this.state.name} onChange={this.handleChange} />
            <input type='text' className='form-input-register' placeholder='Apellido' id='lastname' name='lastname' value={this.state.lastname} onChange={this.handleChange} />
            <input type='email' className='form-input-register' placeholder='Correo electrónico' id='email' name='email' value={this.state.email} onChange={this.handleChange} />
            <input type='password' className='form-input-register' placeholder='*********' id='password' name='password' value={this.state.password} onChange={this.handleChange} />
            <div className='radio-buttons'>
              <h3>Registrart usuario como</h3>
              <div className='form-group'>
                <label htmlFor='applicant'>Candidato</label>
                <input type='radio' className='form-radio-register' id='applicant' name='roleUser' value='applicant' checked={this.state.roleUser === 'applicant'} onChange={this.handleChange} />
              </div>
              <div className='form-group'>
                <label htmlFor='business'>Empresa</label>
                <input type='radio' className='form-radio-register' id='business' name='roleUser' value='business' checked={this.state.roleUser === 'business'} onChange={this.handleChange} />
              </div>
              <div className='form-group'>
                <label htmlFor='administrator'>Administrador</label>
                <input type='radio' className='form-radio-register' id='administrator' name='roleUser' value='administrator' checked={this.state.roleUser === 'administrator'} onChange={this.handleChange} />
              </div>
            </div>
            <div className='box-center'>
              <button className='btn btn-red' onClick={this.handleSubmit}>Dar de alta</button>
            </div>
          </form>
        </section>
      </React.Fragment>
    )
  }
}

export default UserRegister
