import React, { Component } from 'react';
import splitLogo from './../icons/logo/split_logo_new.svg';
import './login.css';
import Nav from './../componentes/Nav'
import Formulario from './../componentes/Formulario'
import Cadastro from './../componentes/Cadastro'

class Login extends Component {
  render() {
    return (
        <div className='container'>
            <main className='containerLogin'>
                <Nav
                src={splitLogo}
                alt="Logo Split"
                title="Logo Split"
                />
                <Formulario
                titulo="Login no Split"
                subtitulo="Entre usando as redes sociais"
                firstIcon="fab fa-facebook-f"
                secondIcon="fab fa-twitter"
                thirdIcon="fab fa-google"
                opcao="ou"
                usernameInputType="text"
                passwordInputType="password"
                inputNameUser="username"
                inputNamePassword="password"
                usernamePlaceholder="E-mail"
                passwordPlaceholder="Senha"
                btn="LOGIN"
                />
            </main>
            <Cadastro
            titulo="Olá! Novo por aqui?"
            subtitulo="Cadastre-se e descubra como aproveitar ainda mais suas viagens!"
            btn="CADASTRO"
            />
        </div>
    );
  }
}
export default Login;