import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
    render() {
      return (
        <nav className='containerNav'>
            <div className='navbar'>
                <img src={this.props.src} alt={this.props.alt} title={this.props.title}/> 
            </div>
        </nav>         
      );
    }
  }
export default Nav;