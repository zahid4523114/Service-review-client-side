import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="navbar-brand" href="#">
          <h2>
            Peta <span className="text-danger">Pixel</span>{" "}
          </h2>
        </div>
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
        <div
          className="collapse d-lg-flex justify-content-lg-end navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item me-lg-3">
              {" "}
              <Link
                to="/home"
                className="nav-link  fs-5 "
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item me-lg-3">
              <Link className="nav-link  fs-5" href="#">
                My Reviews
              </Link>
            </li>
            <li className="nav-item me-lg-3">
              <Link className="nav-link  fs-5" href="#">
                Add Service
              </Link>
            </li>
            <li className="nav-item me-lg-3">
              <Link className="nav-link  fs-5">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
