import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Layout from './components/Template'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Vacants from './pages/Vacants'
import Applicants from './pages/Applicants'
import NotFound from './pages/NotFound'
import Panel from './pages/Panel/Panel'
import { ProtectedRoute } from './ProtectedRoute'
import BusinessRegisters from './pages/Panel/BusinessRegisters';
import ApplicantsRegisters from './pages/Panel/ApplicantsRegisters';
import UserRegister from './pages/Panel/UserRegister';
import VacantCreate from'./pages/Panel/VacantCreate';
import VacantsRegisters from './pages/Panel/VacantsRegisters';
import UserShow from './pages/Panel/UserShow';

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <HashRouter>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/registrar' component={Register} />
              <Route exact path='/ingresar' component={Login} />
              <Route exact path='/perfiles' component={Applicants} />
              <Route exact path='/vacantes' component={Vacants} />
              <ProtectedRoute exact path="/panel" component={Panel} />
              <ProtectedRoute exact path='/empresas-registradas' component={BusinessRegisters} />
              <ProtectedRoute exact path='/perfiles-registrados' component={ApplicantsRegisters} />
              <ProtectedRoute exact path='/ver/:id' component={UserShow} />  
              <ProtectedRoute exact path='/nuevo-usuario' component={UserRegister} />
              <ProtectedRoute exact path='/nueva-vacante' component={VacantCreate} />
              <ProtectedRoute exact path='/vacantes-publicadas' component={VacantsRegisters} />
              
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </HashRouter>
      </React.Fragment>
    )
  }
}

export default App
