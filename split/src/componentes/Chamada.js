import React, { Component } from 'react';
import './chamada.css';

class Chamada extends Component {
    render() {
      return (
        <div className="chamada">
            <h1>{this.props.conteudoChamada}</h1>
            <div className="dotstyle dotstyle-fillup">
                <ul>
                    <li className="current"><a href="#"></a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                </ul>
            </div>
        </div>        
      );
    }
  }
export default Chamada;








