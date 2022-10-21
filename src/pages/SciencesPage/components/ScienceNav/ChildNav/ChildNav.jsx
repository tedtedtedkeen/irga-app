import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styles from "./ChildNav.module.scss";

const ChildNav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to={"/science"} className={styles.a}>
        <span></span>
        <h5>
          Все года
        </h5>
      </NavLink>
      <NavLink to={"/science/eighteen"} className={styles.a}>
        <span></span>
        <h5>
          2018
        </h5>
      </NavLink>
      <NavLink to={"/19"} className={styles.a}>
        <span></span>
        <h5>
          2019
        </h5>
      </NavLink>
      <NavLink to={"/science/test"} className={styles.a} >
        Test
      </NavLink>
      <NavLink to={"/science/another"} className={styles.a}>
        Another
      </NavLink>
    </nav>
  )
}

export { ChildNav }