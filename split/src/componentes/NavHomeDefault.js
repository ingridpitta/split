import React, { Component } from 'react';
import './navHomeDefault.css';

class NavHomeDefault extends Component {
    render() {
      return (
        <nav className={this.props.classNav}>
            <img src={this.props.src} alt={this.props.alt} title={this.props.title}/>
            <ul>
                <li>{this.props.primeiraPagina}</li>
                <li><span>{this.props.divisor}</span></li>
                <li>{this.props.segundaPagina}</li>
            </ul>
            <button className={this.props.classBtn}>{this.props.btn}</button>
        </nav>       
      );
    }
  }
export default NavHomeDefault;