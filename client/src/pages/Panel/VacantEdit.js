import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { updateVacant } from '../../services/Vacants'

import '../../components/styles/register.css'

class VacantEdit extends Component {

  constructor () {
    super()
    this.state = {
      title: '',
      description: '',
      daysWork: '',
      hoursWorks: '',
      salary: '',
      note: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    const { title, description, hoursWorks, daysWork, salary, note } = this.state
    updateVacant({
      title: title,
      description: description,
      daysWork: daysWork,
      hoursWorks: hoursWorks,
      salary: salary,
      note: note
    })
      .then(res => {
        console.log('Vacant registered')
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
          <Link to='/empresas-registradas' className='btn-small btn-red'><i className="fas fa-arrow-left"></i> Regresar</Link>
        </div>
          <h2 className='h2'>Editar vacante</h2>
          <form className='form-register' autoComplete='off'>
            <input type='text' className='form-input-register' placeholder='Titulo' id='title' 
              name='title' 
              value={this.state.title} 
              onChange={this.handleChange} />
            <textarea rows='5' className='form-input-register' placeholder='Descripción' id='description' 
              name='description' 
              value={this.state.description} 
              onChange={this.handleChange} />
            <input type='text' className='form-input-register' placeholder='Días de trabajo' id='daysWork' 
              name='daysWork' 
              value={this.state.daysWork} 
              onChange={this.handleChange} />
            <input type='text' className='form-input-register' placeholder='Horario de trabajo' id='hoursWork' 
              name='hoursWorks' 
              value={this.state.hoursWorks} 
              onChange={this.handleChange} />
            <input type='text' className='form-input-register' placeholder='Salario' id='salary' 
              name='salary' 
              value={this.state.salary} 
              onChange={this.handleChange} /> 
            <textarea rows='5' className='form-input-register' placeholder='Nota' id='note' name='note' value={this.state.note} onChange={this.handleChange} />
            <div className='box-center'>
              <button className='btn btn-red' onClick={this.handleSubmit}>Dar de alta</button>
            </div>
          </form>
        </section>
      </React.Fragment>
    )
  }
}

export default VacantEdit
