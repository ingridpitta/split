import React, { Component } from 'react';
import './viagem.css';
import { Link } from 'react-router-dom'
import firebase, {database ,auth, provider, providerFb, providerTw} from './../firebase.js';


class Viagem extends Component {
    constructor() {
        super();
        this.state = {
          titulo: '',
          participantes: [],
          viagens: []
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
            let arrParticipanteSplit = arrParticipantes.split(",");
            newState.push({
              id: item, 
              tituloViagem: viagens[item].tituloViagem,
              participantesViagem: arrParticipanteSplit 
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
        const viagens = {
          tituloViagem: this.state.titulo,
          participantesViagem: this.state.participantes
        }

        viagensRef.push(viagens);

        this.setState({
          titulo: '',
          participantes: ''
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
                    <textarea type={this.props.inputTypeParticipantes} id={this.props.id} name={this.props.participantes} placeholder={this.props.participantesPlaceholder} onChange={this.handleChange} value={this.state.participantes}
                    rows={this.props.rows} cols={this.props.cols}></textarea>
                    <button className='btnViagem'>{this.props.btn}</button> 
                </form>  
            </section>

            <section className='display-item'>
                <div className="wrapper">
                    <ul>
                    {this.state.viagens.map((viagens) => {
                        return (
                        <li key={viagens.id}>
                            <h3>{viagens.tituloViagem}</h3>
                            <p>Participantes: {viagens.participantesViagem}</p>
                            <button onClick={() => this.removeViagens(viagens.id)}>Remove Item</button>
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
