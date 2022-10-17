import React from "react";
import styles from "./ScienceNav.module.scss";
import { NavLink } from "react-router-dom";

const ScienceNav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to={"/science"}>
        <span></span>
        <h5>
          Все года
        </h5>
      </NavLink>
      <NavLink to={"/18"}>
        <span></span>
        <h5>
          2018
        </h5>
      </NavLink>
      <NavLink to={"/19"}>
        <span></span>
        <h5>
          2019
        </h5>
      </NavLink>
    </nav>
  );
};

export { ScienceNav };