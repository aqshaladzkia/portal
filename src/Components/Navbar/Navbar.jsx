import React from "react";
import Image from "../../Assets/Image/Logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
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
            <button type="button" data-bs-toggle="modal" data-bs-target="#addDevices"  className="btn btn-primary">
              Add New Device
            </button>
          </div>
        </nav>
      </div>
      <div className={`modal fade`} id="addDevices">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add New Devices</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                  <label htmlFor="device">Device Name</label>
                  <input type="text" className="form-control" placeholder="Lamp"/>
              </div>
              
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};
