import React from 'react';
import Inicio from './components/Inicio'
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'
import User from './components/User'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/nosotros" className="btn btn-dark">
            Nosotros
          </Link>
          <NavLink to="/contacto" className="btn btn-dark" activeClassName="active">
            Contacto
          </NavLink>
        </div>
      </div>
      <Switch>
        <Route path="/nosotros/:id">
            <User/>
        </Route>
        <Route path="/" exact>
            <Inicio/>
        </Route>
        <Route path="/nosotros">
            <Nosotros/>
        </Route>
        <Route path="/Contacto">
            <Contacto/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
