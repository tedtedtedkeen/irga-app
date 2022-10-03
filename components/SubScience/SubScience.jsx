import React from 'react';
import styles from "./SubScience.module.scss";
import { PrNum } from '../../ui/PrNum';

const SubScience = ({
  id,
  title,
  img
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
            Читать дальше
          </p>
          <PrNum 
            id={id}
            total={2}
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

export { SubScience };