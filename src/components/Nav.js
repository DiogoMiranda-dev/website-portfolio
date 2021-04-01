import React from 'react';

const Nav = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
                DM
            </div>
          </ul>
          <ul className="navbar__right">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
