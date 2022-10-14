import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import styles from "./NextButton.module.scss";

function NextButton({
  text,
  id,
  total,
  ide,
  page,
  nextSlide = f => f,
}) {
  return (
    // <Link to={`${page}${id}`}>
    // text ? styles.text : styles.button
      <button 
        className={text ? styles.text : styles.button} 
        onClick={() => nextSlide(ide)}
      >
        {
          text
            ? <p className={styles.p} >
              { text }
            </p>
            : null
        }
        <div>
          <p>
            {ide}/{total}
          </p>
          <HiOutlineArrowNarrowRight className={styles.arrow} />
        </div>
      </button>
    // </Link>
  );
}

export { NextButton };