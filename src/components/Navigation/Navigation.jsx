import React from "react";
import styled from "./navigation.module.css";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={styled.Navigation}>
      <NavLink
        className={({ isActive }) => (isActive ? `${styled.ActiveLink}` : ``)}
        to="/"
      >
        RECIPE LIST
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? ` ${styled.ActiveLink}` : ``)}
        to="/recipe-entry"
      >
        ADD NEW RECIPE
      </NavLink>
    </nav>
  );
};

export default Navigation;
