import React, { Component } from 'react';
import './painelViagem.css';
import splitLogo from './../icons/logo/split_logo_new_white.png';
import { Link } from 'react-router-dom'
import firebase, {database ,auth, provider, providerFb, providerTw} from './../firebase.js';
import * as ROUTES from '../constants/routes';
import NavDashboard from './../componentes/NavDashboard';


class PainelViagem extends Component {
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
        <div>
            <NavDashboard
            classNameNav="navDashboard"
            src={splitLogo}
            classNamePesquisa="pesquisaBarra"
            inputType="text"
            inputName="pesquisa"
            inputPlaceholder="Pesquisar"
            classNameBtn="btnLogout"
            />
        </div>
           
      );
    }
  }
  export default PainelViagem;
