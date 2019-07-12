import React, { Component } from 'react';
import './nav.css';
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes';

class Nav extends Component {
    render() {
      return (
        <nav className='containerNav'>
            <div className='navbar'>
                <Link to={ROUTES.HOME}><img src={this.props.src} alt={this.props.alt} title={this.props.title}/> </Link>
            </div>
        </nav>         
      );
    }
  }
export default Nav;