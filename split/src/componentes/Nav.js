import React, { Component } from 'react';
import './nav.css';
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
      return (
        <nav className='containerNav'>
            <div className='navbar'>
                <Link to="/"><img src={this.props.src} alt={this.props.alt} title={this.props.title}/> </Link>
            </div>
        </nav>         
      );
    }
  }
export default Nav;