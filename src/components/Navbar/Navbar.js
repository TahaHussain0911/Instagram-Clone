import React from "react";
import "./Navbar.scss";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as InstaLogo } from "../../assets/Responsivelogo.svg";
import { ReactComponent as Notify } from "../../assets/Notify.svg";
import { ReactComponent as Search } from "../../assets/Search.svg";


import Menu from "../Menu/Menu";
import More from "../More/More";
const Navbar = () => {
  return (
    <>
    <div className="hide-navbar">
      <Logo />
      <div className="search-react">
          <input type="text" placeholder="Search"/>
          <Search className="search-icon"/>
        <Notify className="notifications"/>
      </div>
    </div>
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <InstaLogo className="logo hide"/>
          <Logo className="logo hide-later" />
        </a>
      </div>
      <Menu />
      <More />
    </div>
    </>
  );
};

export default Navbar;
