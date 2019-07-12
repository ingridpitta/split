import React, { Component } from 'react';
import './cadastro.css';
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes';

class Cadastro extends Component {
    render() {
      return (
        <article className='cadastro'>
            <div className='sair'>
                <Link to="/"><button>X</button></Link>
            </div>
            <div className='conteudoCadastro'>
                <h2 className='tituloCadastro'>{this.props.titulo}</h2>
                <h2 className='textoCadastro'>{this.props.subtitulo}</h2>
                <Link to={ROUTES.CADASTRO}><button className='btnCadastro'>{this.props.btn}</button></Link>
            </div>
        </article>       
      );
    }
  }
export default Cadastro;