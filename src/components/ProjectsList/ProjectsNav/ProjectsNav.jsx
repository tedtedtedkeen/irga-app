import React from "react";
import styles from "./ProjectsNav.module.scss";
import { NavLink } from "react-router-dom";

const ProjectsNav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to={"/projects"}>
        <span></span>
        <h5>
          Все проекты
        </h5>
      </NavLink>
      <NavLink to={"/urban"}>
        <span></span>
        <h5>
          Градостроительство
        </h5>
      </NavLink>
      <NavLink to={"/architecture"}>
        <span></span>
        <h5>
          Архитектура
        </h5>
      </NavLink>
			<NavLink to={"/socialspace"}>
        <span></span>
        <h5>
          Общественное пространство
        </h5>
      </NavLink>
			<NavLink to={"/landscape"}>
        <span></span>
        <h5>
          Ландшафтный дизайн
        </h5>
      </NavLink>
    </nav>
  );
};

export { ProjectsNav };
