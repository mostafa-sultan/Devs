import React from 'react';
import { Link } from "react-router-dom";
{/* <Link to="/expenses">Expenses</Link> */ }

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">Devs</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            {/* <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li> */}
            <li className="nav-item active">
              <a className="nav-link" href="https://www.linkedin.com/in/mostafa-sultan/" target="_blank">Contact</a>
            </li>
          </ul>

          <Link to="/about">About</Link>

        </div>
      </nav>

    </>
  );
}
