import React from 'react';
import styles from "./NextProject.module.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import { useNavigate } from "react-router-dom";
// import { useDatabase } from '../../../../store/DataProvider';

const NextProject = ({
  ide,
  total,
  next = f => f,
  title,
  img
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
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
        <h2 className={styles.title}>
          { title }
        </h2>
      </div>
      <img
        className={styles.img} 
        src={img} 
        alt="project-image" 
      />
    </div>
  );
};

export { NextProject };