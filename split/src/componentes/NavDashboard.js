import React, { Component } from 'react';
import './navDashboard.css';
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes';



class NavDashboard extends Component {
  render() {

    return (
    <div>
        <nav className={this.props.classNameNav}>
            <Link to={ROUTES.HOME}><img src={this.props.src}/></Link>
            <div className={this.props.classNamePesquisa}>
                <input type={this.props.inputType} name={this.props.inputName} placeholder={this.props.inputPlaceholder}></input>
                <Link to={ROUTES.HOME}><button className={this.props.classNameBtn}>Logout</button></Link>
            </div>
        </nav>
    </div>
    );
  }
}
export default NavDashboard;