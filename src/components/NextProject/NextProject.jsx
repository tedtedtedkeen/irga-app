import React from 'react';
import styles from "./NextProject.module.scss";

const NextProject = ({
  id,
  img,
  title
}) => {
  return (
    <div
      className={styles.main}
    >
      <div
        className={styles.leftSide}
      >
        <div
          className={styles.next}
        >
          <p>
            Следующий проект
          </p>
          <PrNum 
            id={id}
            green={true}
          />
        </div>
        <h2>
          { title }
        </h2>
      </div>
      <img 
        src={img}
        alt="Image" 
      />
    </div>
  );
};

export { NextProject };