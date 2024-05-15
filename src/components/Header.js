// Header.js

import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Anime Land</h1>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#bleach">Bleach</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#one-piece">One Piece</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#naruto">Naruto</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#magical-battle">Magical Battle</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
