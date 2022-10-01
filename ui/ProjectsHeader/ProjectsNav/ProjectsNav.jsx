import React from "react";
import styles from "./ProjectsNav.module.scss";
import { NavLink } from "react-router-dom";

const ProjectsNav = () => {
  return (
    <nav>
      <ul 
				className={styles.list}
			>
        <li 
					className={styles.withCircle}
				>
          <div 
						className={styles.circle}
					></div>
          <NavLink to={"/"}>Все проекты</NavLink>
        </li>
        <li>
          <NavLink to={"urban"}>Градостроительство</NavLink>
        </li>
        <li>
          <NavLink to={"arch"}>Архитектура</NavLink>
        </li>
        <li>
					<NavLink to={"space"}>Общественное пространство</NavLink>
				</li>
        <li>
					<NavLink to={"landscape"}>Ландшафтный дизайн</NavLink>
				</li>
      </ul>
    </nav>
  );
};

export { ProjectsNav };
