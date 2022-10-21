import React from "react";
import styles from "./ScienceNav.module.scss";
import { NavLink } from "react-router-dom";

const ScienceNav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to={"/science"} className={styles.a}>
        <span></span>
        <h5>
          Все года
        </h5>
      </NavLink>
      <NavLink to={"/eighteen"}  className={styles.a}>
        <span></span>
        <h5>
          2018
        </h5>
      </NavLink>
      <NavLink to={"/nineteen"} className={styles.a}>
        <span></span>
        <h5>
          2019
        </h5>
      </NavLink>
    </nav>
  );
};

export { ScienceNav };