import React, { Component } from 'react';
import './formulario.css';
import { Link } from 'react-router-dom'
import firebase, { database ,auth, provider } from './../firebase';
import * as ROUTES from '../constants/routes';


class Formulario extends Component {
    render() {
        



        // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // ...
        //   });


      return (
        <div className='conteudoLogin'>
            <header>
                <div className='cabecalho'>
                    <h1>{this.props.titulo}</h1>
                    <h2>{this.props.subtitulo}</h2>
                </div>
                <div className='loginRedes'>
                    <button className='fbIcon'><i className={this.props.firstIcon}></i></button> 
                    <button><i className={this.props.secondIcon}></i></button> 
                    <button><i className={this.props.thirdIcon}></i></button>
                </div>
                <div className='strike'>
                    <span>{this.props.opcao}</span>
                </div>
            </header>
            <section className='dadosLogin'>
                <form className='formLogin'>
                    <input type={this.props.usernameInputType} name={this.props.inputNameUser}placeholder={this.props.usernamePlaceholder}/>
                    <input type={this.props.passwordInputType} name={this.props.inputNamePassword} placeholder={this.props.passwordPlaceholder}/>
                    
                    <Link to={ROUTES.DASHBOARD}><button className='btnLogin'>{this.props.btn}</button></Link> 
                </form>  
            </section>
        </div> 
      );
    }
  }
  export default Formulario;
