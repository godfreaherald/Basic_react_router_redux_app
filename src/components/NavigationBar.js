import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <Link
                to="/"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Readings
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/add">
                  Add
                </Link>
                <Link className="dropdown-item" to="/edit">
                  Edit
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/approve">
                  Approve
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/signup">
                Sign UP
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/dashboard">
                Dasboard
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
