import React from 'react'
import Auth from '../../helpers/Auth'
import { withRouter } from 'react-router-dom'

import '../styles/index.css'

const Logout = (props) => {
    return (
      <div className='menu-btns'>
        <a  className="btn-login" href="/" onClick={
          () => {
            Auth.logout(() => {
                props.history.push("/")
            })}}
          ><i className='fas fa-sign-out-alt'></i> Cerrar sesión</a>
      </div>
    )
}

export default withRouter(Logout)