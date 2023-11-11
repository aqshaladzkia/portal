import React from 'react'
import Image from '../../Assets/Image/Logo.png'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar bg-white'>
        <nav class="navbar-utama  py-2">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                <img
                    src= {Image}
                    alt="Logo"
                    width="154"
                    height="34"
                    className="d-inline-block align-text-top logo-utama"
                    />
                </a>
            </div>
        </nav>
    </div>
  )
}
