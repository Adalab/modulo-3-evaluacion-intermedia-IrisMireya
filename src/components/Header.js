import React from "react";

const Header = () =>{
  let imgUrl = "https://assets.turbologo.com/blog/es/2019/12/19132808/friends-logo-cover-958x575.png";
    return (
          <div className="header_container">
          <header className="header">
          <img src={imgUrl} alt="friends-logo" className="header-image" />
            </header>
          </div>
      );
}
export default Header;