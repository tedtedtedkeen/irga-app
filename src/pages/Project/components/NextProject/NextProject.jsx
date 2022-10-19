import React from 'react';
import styles from "./NextProject.module.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const NextProject = ({
  ide,
  total,
  next = f => f
}) => {
  return (
    <div className={styles.container}>
      <button 
        onClick={() => next(ide)}
        className={styles.button}
      >
        <p>
          Следующий проект
        </p>
        <div>
          <p>
          {ide}/{total}
          </p>
          <HiOutlineArrowNarrowRight className={styles.arrow}/>
        </div>
      </button>
      {/* <button
        onClick={() => next(ide)}
      >Click</button> */}
    </div>
  );
};

export { NextProject };