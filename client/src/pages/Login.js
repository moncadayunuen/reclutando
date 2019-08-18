import React from 'react'
import { withRouter } from 'react-router-dom'
import Auth from '../helpers/Auth'
import { getToken } from '../services/Users'

import '../components/styles/register.css'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    console.log('Event form sent')
    const { email, password } = this.state
    getToken({
      email: email,
      password: password
    }).then(data => {
      if (data.success === false) {
        this.setState({
          error: true,
          errorMessage: data.message
        })
      } else {
        this.setState({
          error: false,
          errorMessage: ''
        })
        Auth.login(data, () => {
          this.props.history.push('/panel')
        })
      }
    })
  }
  handleChange (e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render () {
    return (
      <React.Fragment>
        <div className='padding-top'></div>
        <section>
          <h2 className='h2'>Ingresar</h2>
          <form className='form-register' autoComplete='off'>
            <input 
              type='email' 
              className='form-input-register' 
              placeholder='Correo electrónico' 
              id='email' 
              name='email' 
              value={this.state.email} 
              onChange={this.handleChange} />
            <input 
              type='password' 
              className='form-input-register' 
              placeholder='*********' 
              id='password' 
              name='password' 
              value={this.state.password} 
              onChange={this.handleChange} />
            <div className='box-center'>
              <button 
                className='btn btn-red' 
                onClick={this.handleSubmit}
              >Entrar</button>
              <p>{this.state.errorMessage}</p>
            </div>
          </form>
          <div className='btn-social-accounts'>
            <a className='btn-google' href='/'><span className='icon-google'><i className='fab fa-google'></i></span>Ingresar con Google</a>
            <a className='btn-facebook' href='/'><span className='icon-facebook'><i className='fab fa-facebook-f'></i></span>Ingresar con Facebook</a>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default withRouter(Login)
