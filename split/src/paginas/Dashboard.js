import React, { Component } from 'react';
import splitLogo from './../icons/logo/split_logo_new_white.png';
import './dashboard.css';
import { Link } from 'react-router-dom'
import Viagem from './../componentes/Viagem'
import NavDashboard from './../componentes/NavDashboard'



class Dashboard extends Component {
  render() {
    return (
        <div className="containerDashboard">
            <div className="conteudoDashboard">
                <NavDashboard
                classNameNav="navDashboard"
                src={splitLogo}
                classNamePesquisa="pesquisaBarra"
                inputType="text"
                inputName="pesquisa"
                inputPlaceholder="Pesquisar"
                classNameBtn="btnLogout"
                />
                <Viagem
                inputTypeTitulo="text"
                titulo="titulo"
                tituloPlaceholder="Para onde você está viajando?"
                id="story"
                participantes="participantes"
                participantesPlaceholder="Com quem você está viajando?"
                inputTypeParticipantes ="text"
                btn="Nova Viagem"
                />
            </div>
        </div>
    );
  }
}
export default Dashboard;