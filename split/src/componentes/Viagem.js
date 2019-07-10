import React, { Component } from 'react';
import './viagem.css';
import { Link } from 'react-router-dom'
import firebase, {database ,auth, provider, providerFb, providerTw} from './../firebase.js';


class Viagem extends Component {
    constructor() {
        super();
        this.state = {
          username: '',
          password: '',
          items: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('items');
        itemsRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          for (let item in items) {
            newState.push({
              id: item,
              usuario: items[item].usuario,
              senha: items[item].senha
            });
          }
          this.setState({
            items: newState
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
        const itemsRef = firebase.database().ref('items');
        const item = {
          usuario: this.state.username,
          senha: this.state.password
        }

        itemsRef.push(item);

        this.setState({
          username: '',
          password: ''
        });
    }

    removeItem(itemId) {
        const itemRef = firebase.database().ref(`/items/${itemId}`);
        itemRef.remove();
    }

    render() {
      return (
        <div className='conteudoViagem'>
            <section className='dadosViagem'>
                <form className='formViagem'onSubmit={this.handleSubmit}>
                    <input type={this.props.usernameInputType} name={this.props.inputNameUser}placeholder={this.props.usernamePlaceholder} onChange={this.handleChange} value={this.state.username}/>
                    <input type={this.props.passwordInputType} name={this.props.inputNamePassword} placeholder={this.props.passwordPlaceholder} onChange={this.handleChange} value={this.state.password}/>
                    
                    <button className='btnViagem'>{this.props.btn}</button> 
                </form>  
            </section>

            <section className='display-item'>
                <div className="wrapper">
                    <ul>
                    {this.state.items.map((item) => {
                        return (
                        <li key={item.id}>
                            <h3>{item.senha}</h3>
                            <p>brought by: {item.usuario}</p>
                            <button onClick={() => this.removeItem(item.id)}>Remove Item</button>
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
