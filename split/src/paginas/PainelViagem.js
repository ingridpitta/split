import React, { Component } from 'react';
import './painelViagem.css';
import splitLogo from './../icons/logo/split_logo_new_white.png';
import { Link } from 'react-router-dom'
import firebase, {database ,auth, provider, providerFb, providerTw} from './../firebase.js';
import * as ROUTES from '../constants/routes';
import NavDashboard from './../componentes/NavDashboard';
import Viagem from './../componentes/Viagem';


class PainelViagem extends Component {
    constructor() {

        super();
        this.state = {
          gasto: '',
          pagante: [],
          valor:'',
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
      const id = this.props.location.pathname.match(/\/(-.*)$/)[1];
      // console.log(id)
      return (
          <div>

          
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
        <div>
        <section className='dadosViagem'>
            <form className='formViagem'onSubmit={this.handleSubmit}>
                <input type="text" name="gasto" placeholder="Gastei com?" onChange={this.handleChange} value={this.state.gasto}/>
                <input type="text" name="pagante" placeholder= "Quem pagou?" onChange={this.handleChange} value={this.state.pagante}/>
                <input type="text" name="valor" placeholder= "Quanto custou?" onChange={this.handleChange} value={this.state.valor}/>
                <button className='btnViagem'>ADD</button> 
            </form>  
        </section>


        <section className='display-item'>
                <div className="wrapperTarget">
                  <Link to={ROUTES.DASHBOARD}>Voltar</Link>
                    <ul className="cardTarget">
                    {this.state.viagens.map((viagens) => {
                      if(viagens.id == id){
                        return (
                          <li key={viagens.id}>
                            <div className='containerCardTarget'>
                              <h3 className='tituloCardViagemTarget'>{viagens.tituloViagem}</h3>
                              <div className="avatar">
                                <div>{viagens.avatarParticipantes.map((index) =>{
                                  return(<div className="avatarInicial">{index}</div>)
                                })}</div>
                              </div>
                            </div>

                            <p>Lorem auishdiahdiashdkhsadasdasjdbasjhdjashdjhasdhsajkhdjashdjkahsdasjhdjaskhdjashdkasdkashdkjsahdjkashdkajshdjakshdkajshdjkashdjakhsdkasjhdkasjhdkajshdkajshdjkashhsakjhdLorem auishdiahdiashdkhsadasdasjdbasjhdjashdjhasdhsajkhdjashdjkahsdasjhdjaskhdjashdkasdkashdkjsahdjkashdkajshdjakshdkajshdjkashdjakhsdkasjhdkasjhdkajshdkajshdjkashhsakjhdLorem auishdiahdiashdkhsadasdasjdbasjhdjashdjhasdhsajkhdjashdjkahsdasjhdjaskhdjashdkasdkashdkjsahdjkashdkajshdjakshdkajshdjkashdjakhsdkasjhdkasjhdkajshdkajshdjkashhsakjhdLorem auishdiahdiashdkhsadasdasjdbasjhdjashdjhasdhsajkhdjashdjkahsdasjhdjaskhdjashdkasdkashdkjsahdjkashdkajshdjakshdkajshdjkashdjakhsdkasjhdkasjhdkajshdkajshdjkashhsakjhdLorem auishdiahdiashdkhsadasdasjdbasjhdjashdjhasdhsajkhdjashdjkahsdasjhdjaskhdjashdkasdkashdkjsahdjkashdkajshdjakshdkajshdjkashdjakhsdkasjhdkasjhdkajshdkajshdjkashhsakjhdLorem auishdiahdiashdkhsadasdasjdbasjhdjashdjhasdhsajkhdjashdjkahsdasjhdjaskhdjashdkasdkashdkjsahdjkashdkajshdjakshdkajshdjkashdjakhsdkasjhdkasjhdkajshdkajshdjkashhsakjhdLorem auishdiahdiashdkhsadasdasjdbasjhdjashdjhasdhsajkhdjashdjkahsdasjhdjaskhdjashdkasdkashdkjsahdjkashdkajshdjakshdkajshdjkashdjakhsdkasjhdkasjhdkajshdkajshdjkashhsakjhdLorem auishdiahdiashdkhsadasdasjdbasjhdjashdjhasdhsajkhdjashdjkahsdasjhdjaskhdjashdkasdkashdkjsahdjkashdkajshdjakshdkajshdjkashdjakhsdkasjhdkasjhdkajshdkajshdjkashhsakjhdLorem auishdiahdiashdkhsadasdasjdbasjhdjashdjhasdhsajkhdjashdjkahsdasjhdjaskhdjashdkasdkashdkjsahdjkashdkajshdjakshdkajshdjkashdjakhsdkasjhdkasjhdkajshdkajshdjkashhsakjhdLorem auishdiahdiashdkhsadasdasjdbasjhdjashdjhasdhsajkhdjashdjkahsdasjhdjaskhdjashdkasdkashdkjsahdjkashdkajshdjakshdkajshdjkashdjakhsdkasjhdkasjhdkajshdkajshdjkashhsakjhdLorem auishdiahdiashdkhsadasdasjdbasjhdjashdjhasdhsajkhdjashdjkahsdasjhdjaskhdjashdkasdkashdkjsahdjkashdkajshdjakshdkajshdjkashdjakhsdkasjhdkasjhdkajshdkajshdjkashhsakjhdLorem auishdiahdiashdkhsadasdasjdbasjhdjashdjhasdhsajkhdjashdjkahsdasjhdjaskhdjashdkasdkashdkjsahdjkashdkajshdjakshdkajshdjkashdjakhsdkasjhdkasjhdkajshdkajshdjkashhsakjhdLorem auishdiahdiashdkhsadasdasjdbasjhdjashdjhasdhsajkhdjashdjkahsdasjhdjaskhdjashdkasdkashdkjsahdjkashdkajshdjakshdkajshdjkashdjakhsdkasjhdkasjhdkajshdkajshdjkashhsakjhdLorem auishdiahdiashdkhsadasdasjdbasjhdjashdjhasdhsajkhdjashdjkahsdasjhdjaskhdjashdkasdkashdkjsahdjkashdkajshdjakshdkajshdjkashdjakhsdkasjhdkasjhdkajshdkajshdjkashhsakjhd</p>
                            
                            <div className='containerBtnCardViagemPainel' >
                              <button className='btnCardViagemPainel'onClick={() => this.removeViagens(viagens.id)}>REMOVER</button>
                            </div>
                          </li>
                          )
                      }
                       
                    })}
                    
                    </ul>
                </div>
            </section>
            
        </div>
        </div>   
      );
    }
  }
  export default PainelViagem;
