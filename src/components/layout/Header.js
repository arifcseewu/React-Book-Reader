import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" class="navbar-brand">
          <h1 className="m-0">Book Reading List</h1>
          <p>Curretnly you have 6 book(s) to get through..</p>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0 ml-auto">
            <li class="nav-item">
              <NavLink exact className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink exact className="nav-link" to="/book/add">
                Add
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink exact className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
