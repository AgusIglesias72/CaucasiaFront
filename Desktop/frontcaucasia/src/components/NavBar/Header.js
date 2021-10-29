import React from "react";
import "./Header.css";
import ImgCart from "./ImgCart";
import ImgHeader from "./ImgHeader";
import ImgMenu from "./ImgMenu";

const Header = () => {
  return (
    <div className="header">
      <ImgMenu />
      <ImgHeader />
      <ImgCart />
    </div>
  );
};

export default Header;
