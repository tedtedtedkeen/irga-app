import React from "react";
import styles from "./ScienceHeader.module.scss";
import irgaLogoX2 from "../../../public/images/irga-logo-x2.png";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const ScienceHeader = ({
  onOpen = f => f
}) => {
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

export { ScienceHeader };