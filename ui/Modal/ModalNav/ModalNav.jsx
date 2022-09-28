import React from 'react';
import styles from "./ModalNav.module.scss";
import { Link } from "react-router-dom";

const ModalNav = () => {
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
  )
}

export { ModalNav };