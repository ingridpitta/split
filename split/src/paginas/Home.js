import React, { Component } from 'react';
import splitLogo from './../icons/logo/split_logo_new_white.png';
import './home.css';
import NavHomeDefault from '../componentes/NavHomeDefault';
import Chamada from '../componentes/Chamada';

class Home extends Component {
  render() {
    return (
        <div className="container">
            <span className="conteudo">
                <NavHomeDefault
                classNav="navbar"
                src={splitLogo}
                alt="Logo Split"
                title="Logo Split"
                primeiraPagina="Home"
                segundaPagina="Sobre"
                divisor="•"
                btn="Login"
                classBtn="btnLoginNav"
                />
                <Chamada
                conteudoChamada="Junte seu grupo e se preocupem apenas em se divertir!"
                />
            </span>  
        </div>
    );
  }
}
export default Home;