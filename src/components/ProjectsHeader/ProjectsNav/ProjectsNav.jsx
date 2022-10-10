import React from "react";
import styles from "./ProjectsNav.module.scss";
import { NavLink } from "react-router-dom";

const ProjectsNav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to={"/"}>
        <span></span>
        <h5>
          Все проекты
        </h5>
      </NavLink>
      <NavLink to={"category"}>
        <span></span>
        <h5>
          Градостроительство
        </h5>
      </NavLink>
      <NavLink to={"arch"}>
        <span></span>
        <h5>
          Архитектура
        </h5>
      </NavLink>
			<NavLink to={"space"}>
        <span></span>
        <h5>
          Общественное пространство
        </h5>
      </NavLink>
			<NavLink to={"landscape"}>
        <span></span>
        <h5>
          Ландшафтный дизайн
        </h5>
      </NavLink>
    </nav>
  );
};

export { ProjectsNav };
