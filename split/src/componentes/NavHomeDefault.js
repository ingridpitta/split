import React, { Component } from 'react';
import './navHomeDefault.css';
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes';

class NavHomeDefault extends Component {
    render() {
      return (
        <nav className={this.props.classNav}>
            <Link to={ROUTES.HOME}><img src={this.props.src} alt={this.props.alt} title={this.props.title}/></Link>
            <ul>
                <li><Link to={ROUTES.HOME}>{this.props.primeiraPagina}</Link></li>
                <li><span>{this.props.divisor}</span></li>
                <li><Link to={ROUTES.SOBRE}>{this.props.segundaPagina}</Link></li>
            </ul>
            <Link to={ROUTES.LOGIN}><button className={this.props.classBtn}>{this.props.btn}</button></Link>
        </nav>       
      );
    }
  }
export default NavHomeDefault;