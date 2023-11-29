import React from "react";
import Image from "../../Assets/Image/Logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar-baru bg-white">
      <nav className="navbar">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#">
            <img
              src={Image}
              alt="Logo"
              width="154"
              height="34"
              className="d-inline-block align-text-top logo-utama"
            />
          </a>
          <button type="button" className="btn btn-primary">
            <Link to="#">Add New Device</Link>
          </button>
        </div>
      </nav>
    </div>
  );
};
