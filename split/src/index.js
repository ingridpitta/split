import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './paginas/Login'
import NovoUsuario from './paginas/NovoUsuario';
import Sobre from './paginas/Sobre';
import Dashboard from './paginas/Dashboard';
// import Erro from '../paginas/ComponenteDePagina404';
import Account from './paginas/Account';
import Admin from './paginas/Admin';
import PasswordForget from './paginas/PasswordForget'
import Home from './paginas/Home'
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Route,Switch
  } from 'react-router-dom';
import * as ROUTES from './constants/routes';
  

ReactDOM.render(
         <Router>
             <Switch>
                <Route exact path={ROUTES.LOGIN} component={Login} />
                <Route path={ROUTES.CADASTRO} component={NovoUsuario} />
                <Route path={ROUTES.SOBRE} component={Sobre} />
                <Route path={ROUTES.PASSWORDFORGET} component={PasswordForget} />
                <Route path={ROUTES.DASHBOARD} component={Dashboard} />
                <Route path={ROUTES.ACCOUNT} component={Account} />
                <Route path={ROUTES.ADMIN} component={Admin} />
                <Route path={ROUTES.HOME} component={Home} />
            </Switch>
        </Router>
, document.getElementById('root'));

//Hot reloading
if (module.hot) {
  module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
