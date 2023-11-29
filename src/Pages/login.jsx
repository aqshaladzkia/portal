import React from "react";
import Image from '../Assets/Image/Logo.png'
import { Link } from "react-router-dom";


export default function Login() {
 
  return (
    <div>
      <section className="vh-100" style={{backgroundColor: "#FEFEFE"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{borderRadius: "1rem"}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{borderRadius: "1rem 0 0 1rem"}}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{color: "#ff6219"}}
                          ></i>
                          <span className="h1 fw-bold mb-0"><img
                    src= {Image}
                    alt="Logo"
                    width="154"
                    height="34"
                    className="d-inline-block align-text-top"
               
                    /></span>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{letterSpacing: "0px"}}
                        >
                          Masuk ke Portal
                        </h5>

                        <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example17" style={{color:"#AAAAAA"}}>
                            Username
                          </label>
                          <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                          />
                          
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form2Example27" style={{color:"#AAAAAA"}}>
                            Password
                          </label>
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                          />
                        </div>

                        <div className="pt-1 mb-4">
                          <Link
                          to={'/dashboard'}
                            className="btn btn-lg btn-block"
                            style={{backgroundColor:"#35bba2",color:"#fff",fontSize:"18px",fontWeight:"500"}}
                          >
                            Masuk
                          </Link>
                        </div>

                        <a className="small text-muted" href="#!">
                          Forgot password?      
                        </a><br/><br></br>
                        {/* <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>
                          Don't have an account?{" "}
                          <a href="#!" style={{color:"#393f81"}}>
                            Register here
                          </a>
                        </p> */}
                        <a href="#!" className="small text-muted">
                        Panduan Penggunaan
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
