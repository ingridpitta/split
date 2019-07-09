import React, { Component } from 'react';
import './cadastro.css';

class Cadastro extends Component {
    render() {
      return (
        <article className='cadastro'>
            <div className='sair'>
                <button>X</button>
            </div>
            <div className='conteudoCadastro'>
                <h2 className='tituloCadastro'>{this.props.titulo}</h2>
                <h2 className='textoCadastro'>{this.props.subtitulo}</h2>
                <button className='btnCadastro'>{this.props.btn}</button>
            </div>
        </article>       
      );
    }
  }
export default Cadastro;