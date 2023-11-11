import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import dashboardIcon from '../../Assets/Icons/dashboard.svg'

const Sidebar = () => {
    return (
    
      <div className="wrapper">
        <nav id="sidebar">
          <ul className="list-unstyled components">
            <li className="active">
              <Link to="/" className="menu">
                <img className='icons' src={dashboardIcon}/>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/about" className="menu">
                User Connect
              </Link>
            </li>
            <li>
              <Link to="/pages" className="menu">
                List Device
              </Link>
            </li>
          </ul>

          <ul class="list-unstyled CTAs">
                <li>
                    <a href="#" class="download">Panduan</a>
                </li>
                <li>
                    <a href="#" class="article">Log Out</a>
                </li>
            </ul>
        </nav>
      </div>
    );
  };
  
  export default Sidebar;

