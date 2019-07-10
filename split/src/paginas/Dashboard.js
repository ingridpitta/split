import React, { Component } from 'react';
import splitLogo from './../icons/logo/split_logo_new.svg';
import './dashboard.css';
import { Link } from 'react-router-dom'
import Viagem from './../componentes/Viagem'



class Dashboard extends Component {
  render() {
    return (
        <div className="containerDashboard">
            <div className="conteudoDashboard">
                <div>
                    <nav className="navDashboard">
                        <Link to="/"><img src={splitLogo}/></Link>
                        <Link to="/"><button>Logout</button></Link>
                    </nav>
                </div>
                <Viagem
                usernameInputType="text"
                inputNameUser="username"
                usernamePlaceholder="usuário"
                passwordInputType="password"
                inputNamePassword="password"
                passwordPlaceholder="senha"
                btn="Nova Viagem"
                />
            </div>
        </div>
    );
  }
}
export default Dashboard;