import React from "react";
import { Link } from "react-router-dom";

import pokemonIcon from "../../images/pokemon-icon.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={pokemonIcon} alt="pokemon" className="logo-image" />
        <Link to="/" className="logo-name">
          Pokemon Wiki
        </Link>
      </div>
    </header>
  );
};

export default Header;
