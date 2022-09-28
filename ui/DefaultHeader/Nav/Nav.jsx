import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

function Nav() {
  return (
    <nav
      className={styles.nav}
    >
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/about">О нас</Link>
        </li>
        <li>
          <Link to="/projects">Проекты</Link>
        </li>
        <li>
          <Link to="/science">Научная деятельность</Link>
        </li>
        <li>
          <Link to="/contacts">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
}

export { Nav };