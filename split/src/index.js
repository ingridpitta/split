import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './paginas/Login'
import Home from './paginas/Home'
import Dashboard from './paginas/Dashboard'
import Sobre from './paginas/Sobre'
import NovoUsuario from './paginas/NovoUsuario'
import ComponenteDePagina404 from './paginas/ComponenteDePagina404'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(<BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/sobre" component={Sobre}/>
        <Route path="/login" component={Login}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/novousuario" component={NovoUsuario}/>
        <Route path='*' component={ComponenteDePagina404}/>
    </Switch>
</ BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
