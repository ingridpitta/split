import React, { Component } from 'react';
import splitLogo from './../icons/logo/split_logo_new.svg';
import './dashboard.css';



class Dashboard extends Component {
  render() {
    return (
        <div className="containerDashboard">
            <div className="conteudoDashboard">
                <div>
                    <nav className="navDashboard">
                        <img src={splitLogo}/>
                    </nav>
                </div>
            </div>
        </div>
    );
  }
}
export default Dashboard;