import React from "react";
import imageLogo from "../assets/images/tmdb_logo.jpg";
import "../assets/styles/Header.css";

export const Header = () => {
  return (
    <div className="header">
      <img className="header__image" src={imageLogo} alt="image_logo" />
    </div>
  );
};
