import React from "react";
import { ProjectsNav } from "../ProjectsNav";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import styles from "./ProjectsHeader.module.scss";
import irgaLogoX2 from "../../../public/images/irga-logo-x2.png";

const ProjectsHeader = ({ onOpen = (f) => f }) => {
  return (
    <div className={styles.main}>
      <img 
        src={irgaLogoX2} 
        alt="IRGA Logotype" 
      />
      <div className={styles.nav}>
        <ProjectsNav />
      </div>
      <button onClick={onOpen}>
        <HiOutlineMenuAlt4 className={styles.icon} />
      </button>
    </div>
  );
};

export { ProjectsHeader };
