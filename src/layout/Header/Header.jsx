import React from "react";
import styled from "./header.module.css";


import Navigation from "../../components/Navigation/Navigation";
const Header = () => {
  return (
    <header className={styled.Header}>
      <Navigation />
    </header>
  );
};
export default Header;
