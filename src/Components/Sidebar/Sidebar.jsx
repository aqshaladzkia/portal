import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import dashboardIcon from '../../Assets/Icons/dashboard.svg'
import logoutIcon from '../../Assets/Icons/logout.svg'
import bookIcon from '../../Assets/Icons/book.svg'

const Sidebar = () => {
  return (

    <div className="wrapper">
      <nav id="sidebar">
        <ul className="list-unstyled components">
          <li className="active">
            <Link to="/" className="menu">
              <img className='icons' src={dashboardIcon} />
            </Link>
          </li>
          <li>
            <Link to="/about" className="menu">
            </Link>
          </li>
          <li>
            <Link to="/pages" className="menu">
            </Link>
          </li>
        </ul>

        <ul class="list-unstyled CTAs">
          <li>
            <a href="#" >
              <img src={bookIcon} />
            </a>
          </li>
          <li>
            <Link to="/" >
              <img src={logoutIcon} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

