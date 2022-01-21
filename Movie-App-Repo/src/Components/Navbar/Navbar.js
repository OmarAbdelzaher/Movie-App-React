import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
// import logo from "../../assets/logo.svg";
import appLogo from "../../assets/logo.svg";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Navbar() {
  // const language = useSelector((state) => state.lang);
  let count = useSelector((state) => state.favorites)
  // let len = Object.keys(count).length

  useEffect(() => {   
      },
      [count]);
  
  //     console.log(count,Object.keys(count).length)
  // console.log(len)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{borderBottom:"1px solid #000"}}>
      <div className="container-fluid ">
        <img src={appLogo} alt="logo" className="App-logo" />
        <Link className="navbar-brand col-8 mx-3" to="/">
          Movies
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favorites">
                Favorites
              </Link>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                {Object.keys(count).length}
              </span>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Log In
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            {/* <li className="nav-item">
              <span className="nav-link" to="/">
                {language}
              </span>
            </li> */}
          </ul>
        </div>
          {/* <form className="form-inline my-2 my-lg-0" style={{border : "2px solid red"}}>
            <input className="form-control col-2" style={{border : "2px solid red"}} type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
      </div>
    </nav>
  );
}
