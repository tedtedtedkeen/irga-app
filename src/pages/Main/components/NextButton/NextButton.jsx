import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import styles from "./NextButton.module.scss";

function NextButton({
  text,
  total,
  ide,
  nextSlide = f => f,
}) {
  return (
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
  );
}

export { NextButton };