import React from "react";
import "../styles/layout/_header.scss";

const Header = () => {
  let imgUrl =
    "https://assets.turbologo.com/blog/es/2019/12/19132808/friends-logo-cover-958x575.png";
  return (
    <div className="header__container">
      <header className="header">
        <img src={imgUrl} alt="header__logo" className="header__image" />
      </header>
    </div>
  );
};
export default Header;
