import React from "react";
import styles from "./MoreButton.module.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const MoreButton = ({
  id = "",
  page = ""
}) => {
  return (
    <Link to={`${page}${id}`}>
      <button 
        className={styles.button}
      >
        <p 
          className={styles.text}
        >
          Подробнее
        </p>
        <div 
          className={styles.strelka}
        >
          <HiOutlineArrowNarrowRight className={styles.arrow} />
          <div 
            className={styles.circle}
            >
          </div>
        </div>
      </button>
    </Link>
  );
};

export { MoreButton };
