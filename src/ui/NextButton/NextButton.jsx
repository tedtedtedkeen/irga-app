import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import styles from "./NextButton.module.scss";

function NextButton({
  text,
  id,
  total,
  page,
  index
}) {
  return (
    <Link to={`${page}${id}`}>
      <button className={text ? styles.text : styles.button} >
        {
          text
            ? <p className={styles.p} >
              { text }
            </p>
            : null
        }
        <div>
          <p>
            {index}/{total}
          </p>
          <HiOutlineArrowNarrowRight className={styles.arrow} />
        </div>
      </button>
    </Link>
  );
}

export { NextButton };