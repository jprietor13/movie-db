import React from "react";
import imageLogo from "../assets/images/tmdb_logo.jpg";
import "../assets/styles/Header.css";

export const Header = () => {
  return (
    <div className="header">
      <a target="_blank" rel="noreferrer" href="https://www.themoviedb.org/">
        <img className="header__image" src={imageLogo} alt="image_logo" />
      </a>
    </div>
  );
};
