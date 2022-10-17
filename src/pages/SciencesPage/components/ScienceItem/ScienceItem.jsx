import React from 'react';
import styles from "./ScienceItem.module.scss";
import { MoreButton } from '../../../../ui/MoreButton';

const ScienceItem = ({
  title,
  id, 
  category,
  img,
  firstText,
  firstImage,
  secondText,
  secondImage,
  thirdText,
  thirdImage,
  fourthText,
  fourthImage,
  fifthText,
  fifthImage,
  sixthText,
  seventhText,
  eighthText,
  big
}) => {
  return (
    <div className={styles.container}>
      <img 
        className={big ? styles.bigImg : styles.img}
        src={img}
        alt="science-image" 
      />
      <h3>
        { title }
      </h3>
      <p className={styles.p}>
        { category }
      </p>
      <MoreButton />
    </div>
  )
}

export { ScienceItem };