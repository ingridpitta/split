import React, { Component } from 'react';
import './navHomeDefault.css';
import { Link } from 'react-router-dom'

class NavHomeDefault extends Component {
    render() {
      return (
        <nav className={this.props.classNav}>
            <Link to="/"><img src={this.props.src} alt={this.props.alt} title={this.props.title}/></Link>
            <ul>
                <li><Link to="/">{this.props.primeiraPagina}</Link></li>
                <li><span>{this.props.divisor}</span></li>
                <li><Link to="/sobre">{this.props.segundaPagina}</Link></li>
            </ul>
            <Link to="/login"><button className={this.props.classBtn}>{this.props.btn}</button></Link>
        </nav>       
      );
    }
  }
export default NavHomeDefault;