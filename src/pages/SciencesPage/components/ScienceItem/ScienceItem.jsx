import React from 'react';
import styles from "./ScienceItem.module.scss";
import { MoreButton } from '../../../../ui/MoreButton';

const ScienceItem = ({
  title,
  id, 
  category,
  img,
  big
}) => {
  return (
    <div className={big ? styles.bigContainer : styles.container}>
      <img 
        className={styles.img}
        src={img}
        alt="science-image" 
      />
      <h3>
        { title }
      </h3>
      <p className={styles.p}>
        { category }
      </p>
      <MoreButton 
        id={id}
      />
    </div>
  )
}

export { ScienceItem };