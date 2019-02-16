import React  from 'react';

const NavbarComponent = () => {
    return(
    
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <a className="navbar-brand text-white" href="#">Twentek</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
   
    );
};

export default NavbarComponent;