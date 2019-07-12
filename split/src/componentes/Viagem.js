import React, { Component } from 'react';
import './viagem.css';

import { Route ,Link } from 'react-router-dom'
import firebase, {database ,auth, provider, providerFb, providerTw} from './../firebase.js';
import * as ROUTES from '../constants/routes';



class Viagem extends Component {
    constructor() {
        super();
        this.state = {
          titulo: '',
          participantes: [],
          viagens: [],
          avatar:[]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const viagensRef = firebase.database().ref('viagens');
        viagensRef.on('value', (snapshot) => {
          let viagens = snapshot.val();
          let newState = [];
          
          for (let item in viagens) {
            let arrParticipantes = viagens[item].participantesViagem;
            let arrParticipanteJoin = arrParticipantes.join(",");
            
            newState.push({
              id: item, 
              tituloViagem: viagens[item].tituloViagem,
              participantesViagem: arrParticipanteJoin,
              avatarParticipantes: viagens[item].avatarParticipantes,
            });
          }
          this.setState({
            viagens: newState
          });
        });
    }

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const viagensRef = firebase.database().ref('viagens');
        let participantesViagemSplit = (this.state.participantes).split(",");
        const viagens = {
          tituloViagem: this.state.titulo,
          participantesViagem: participantesViagemSplit,
          avatarParticipantes:participantesViagemSplit.map(function(item){
            let letras = item.split('')
            let inicial = [letras].map(function(el){
              return(el[0])
            })
            let avatarInicial = (inicial.toString()).toUpperCase();
            return(avatarInicial)
          })
        }

        

        viagensRef.push(viagens);

        this.setState({
          titulo: '',
          participantes: '',
          avatar:'',
        });
    }

    removeViagens(viagensId) {
        const viagensRef = firebase.database().ref(`/viagens/${viagensId}`);
        viagensRef.remove();
    }
    
    render() {
      return (
        <div className='conteudoViagem'>
            <section className='dadosViagem'>
                <form className='formViagem'onSubmit={this.handleSubmit}>
                    <input type={this.props.inputTypeTitulo} name={this.props.titulo} placeholder={this.props.tituloPlaceholder} onChange={this.handleChange} value={this.state.titulo}/>
                    <input type={this.props.inputTypeParticipantes} id={this.props.id} name={this.props.participantes} placeholder={this.props.participantesPlaceholder} onChange={this.handleChange} value={this.state.participantes}/>
                    <button className='btnViagem'>{this.props.btn}</button> 
                </form>  
            </section>

            <section className='display-item'>
                <div className="wrapper">
                    <ul className="card">
                    {this.state.viagens.map((viagens) => {
                        return (
                        <li key={viagens.id}>
                          <div className='containerCard'>
                            <h3 className='tituloCardViagem'>{viagens.tituloViagem}</h3>
                            <div className="avatar">
                              <div>{viagens.avatarParticipantes.map((index) =>{
                                return(<div className="avatarInicial">{index}</div>)
                              })}</div>
                            </div>
                            
                          </div>
                          
                          <div className='containerBtnCardViagem' >
                            <button className='btnCardViagem'onClick={() => this.removeViagens(viagens.id)}>REMOVER</button>
                            <Link to={{ pathname: `/painel/${viagens.id}` }}
                            
                            
                            ><button className='btnCardEditarViagem'>EDITAR</button></Link>
                          </div>
                        </li>
                        )
                    })}
                    
                    </ul>
                </div>
            </section>
        </div> 
      );
    }
  }
  export default Viagem;
