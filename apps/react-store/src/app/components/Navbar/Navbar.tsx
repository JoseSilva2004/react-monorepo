import React from 'react';
import './Navbar.scss';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Sistema de Ventas
      </a>
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
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/features">
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pricing">
              Carrito
            </a>
          </li>
          <li className="nav-item">
            <button className="nav-link btn-link" aria-disabled="true">
              Factura
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
