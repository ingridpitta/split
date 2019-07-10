import React, { Component } from 'react';
import splitLogo from './../icons/logo/split_logo_new.svg';
import './dashboard.css';
import { Link } from 'react-router-dom'



class Dashboard extends Component {
  render() {
    return (
        <div className="containerDashboard">
            <div className="conteudoDashboard">
                <div>
                    <nav className="navDashboard">
                        <Link to="/"><img src={splitLogo}/></Link>
                    </nav>
                </div>
            </div>
        </div>
    );
  }
}
export default Dashboard;