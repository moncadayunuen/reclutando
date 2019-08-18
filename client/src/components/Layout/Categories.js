import React from 'react'
import { Link } from 'react-router-dom'

class Categories extends React.Component {
  render () {
    return (<div>
      <section className='container-cards'>
        <h2 className='h2'>Buscar por sección</h2>
        <div className='categories-cards'>
          <article className='category-card'>
            <div className='icon-card'>
              <i className='fas fa-briefcase'></i>
            </div>
            <h3 className='title-card'>Administración / Oficina</h3>
            <ul>
              <li><Link to='/'><i className='fas fa-arrow-circle-right'></i> Ventas</Link></li>
              <li><Link to='/'><i className='fas fa-arrow-circle-right'></i> Atención a Clientes</Link></li>
              <li><Link to='/'><i className='fas fa-arrow-circle-right'></i> Contabilidad / FInanzas</Link></li>
              <li><Link to='/'><i className='fas fa-arrow-circle-right'></i> Administraición / Gerencia</Link></li>
            </ul>
          </article>
          <article className='category-card'>
            <div className='icon-card'>
              <i className='fas fa-truck-moving'></i>
            </div>
            <h3 className='title-card'>Transportes / Logística</h3>
            <ul>
              <li><Link to='/'><i className='fas fa-arrow-circle-right'></i> Almacén / Logística</Link></li>
              <li><Link to='/'><i className='fas fa-arrow-circle-right'></i> Producción / Manufactura</Link></li>
              <li><Link to='/'><i className='fas fa-arrow-circle-right'></i> Transporte / Operarios</Link></li>
              <li><Link to='/'><i className='fas fa-arrow-circle-right'></i> Mantenimiento / Reparaciones técnicas</Link></li>
            </ul>
          </article>
          <article className='category-card'>
            <div className='icon-card'>
              <i className='fas fa-pen-fancy'></i>
            </div>
            <h3 className='title-card'>Mercadotecnia / Artes Gráficas</h3>
            <ul>
              <li><Link to='/'><i className='fas fa-arrow-circle-right'></i> Mercadotecnia / Publicidad</Link></li>
              <li><Link to='/'><i className='fas fa-arrow-circle-right'></i> Diseño Gráfico / Audiovisuales</Link></li>
              <li><Link to='/'><i className='fas fa-arrow-circle-right'></i> Arquitectura / Diseño</Link></li>
            </ul>
          </article>
          <article className='category-card'>
            <div className='icon-card'>
              <i className='fas fa-database'></i>
            </div>
            <h3 className='title-card'>Informática / Redes</h3>
            <ul>
              <li><Link to='/'><i className='fas fa-arrow-circle-right'></i> Ingenierías</Link></li>
              <li><Link to='/'><i className='fas fa-arrow-circle-right'></i> Informática</Link></li>
              <li><Link to='/'><i className='fas fa-arrow-circle-right'></i> Redes / Telecomunicaciones</Link></li>
            </ul>
          </article>
          <article className='category-card'>
            <div className='icon-card'>
              <i className='fas fa-gavel'></i>
            </div>
            <h3 className='title-card'>Legal / Asesorías</h3>
            <ul>
              <li><Link to='/'><i className='fas fa-arrow-circle-right'></i> Legal / Leyes</Link></li>
              <li><Link to='/'><i className='fas fa-arrow-circle-right'></i> Asesorías</Link></li>
            </ul>
          </article>
          <article className='category-card'>
            <div className='icon-card'>
              <i className='fas fa-utensils'></i>
            </div>
            <h3 className='title-card'>Turismo / Hostelería</h3>
            <ul>
              <li><Link to='/'><i className='fas fa-arrow-circle-right'></i> Turismo</Link></li>
              <li><Link to='/'><i className='fas fa-arrow-circle-right'></i> Hostelería</Link></li>
              <li><Link to='/'><i className='fas fa-arrow-circle-right'></i> Comida</Link></li>
            </ul>
          </article>
          <article className='category-card'>
            <div className='icon-card'>
              <i className='fas fa-graduation-cap'></i>
            </div>
            <h3 className='title-card'>Educativos</h3>
            <ul>
              <li><Link to='/'><i className='fas fa-arrow-circle-right'></i> Docencia</Link></li>
              <li><Link to='/'><i className='fas fa-arrow-circle-right'></i> Asesorías</Link></li>
            </ul>
          </article>
          <article className='category-card'>
            <div className='icon-card'>
              <i className='fas fa-medkit'></i>
            </div>
            <h3 className='title-card'>Medicina / Salud</h3>
            <ul>
              <li><Link to='/'><i className='fas fa-arrow-circle-right'></i> Salud</Link></li>
            </ul>
          </article>
        </div>
        <div className='box-center'>
          <Link to='/' className='btn btn-red'>Todas las categorías</Link>
        </div>
      </section>
    </div>)
  }
}

export default Categories
