import React from 'react';
import styles from "./SectionNext.module.scss";

const SectionNext = ({
  id,
  img,
  title,
  total
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

export { SectionNext };