import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import styles from "./NextButton.module.scss";

function NextButton({
  text,
  id,
  total,
  page
}) {
  return (
    <Link to={`${page}${id}`}>
      <button className={styles.button} >
        <p className={styles.p} >
          { text }
        </p>
        <div>
          <p>
            {id}/{total}
          </p>
          <HiOutlineArrowNarrowRight className={styles.arrow} />
        </div>
      </button>
    </Link>
  );
}

export { NextButton };