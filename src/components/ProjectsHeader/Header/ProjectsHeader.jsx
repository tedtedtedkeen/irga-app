import React from "react";
import { ProjectsNav } from "../ProjectsNav";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import styles from "./ProjectsHeader.module.scss";
import irgaLogoX2 from "../../../../public/images/irga-logo-x2.png";
import { Link } from "react-router-dom";

const ProjectsHeader = ({ onOpen = (f) => f }) => {
  return (
    <header className={styles.main}>
      <Link to="/">
        <img 
          src={irgaLogoX2} 
          alt="IRGA Logotype" 
        />
      </Link>
      <button onClick={onOpen}>
        <HiOutlineMenuAlt4 className={styles.icon} />
      </button>
    </header>
  );
};

export { ProjectsHeader };
