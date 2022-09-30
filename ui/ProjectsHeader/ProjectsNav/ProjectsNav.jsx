import React from "react";
import styles from "./ProjectsNav.module.scss";
import { Link } from "react-router-dom";

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
          {/* <Link to={"/projects"}>Все проекты</Link> */}
        </li>
        <li>
          <Link to={"/urban"}>Градостроительство</Link>
        </li>
        <li>
          <Link to={"/arch"}>Архитектура</Link>
        </li>
        <li>
					<Link to={"/space"}>Общественное пространство</Link>
				</li>
        <li>
					<Link to={"/landscape"}>Ландшафтный дизайн</Link>
				</li>
      </ul>
    </nav>
  );
};

export { ProjectsNav };
