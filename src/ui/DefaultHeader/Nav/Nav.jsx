import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

function Nav() {
  return (
    <nav
      className={styles.nav}
    >
      <ul>
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink to="/about">О нас</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Проекты</NavLink>
        </li>
        <li>
          <NavLink to="/science">Научная деятельность</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export { Nav };