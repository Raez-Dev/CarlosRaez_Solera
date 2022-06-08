import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar navbar-expand bg-light">
      <div className="container-fluid">        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div className="nav-link">
                <Link to={''}>Todos</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <Link to={'cars'}>Autos</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <Link to={'health'}>Salud</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <Link to={'home'}>Hogar</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header