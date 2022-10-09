import React from 'react';
import styles from "./Subtitle.module.scss";

const Subtitle = ({ subtitle }) => {
  return (
    <p
        className={styles.subtitle}
    > 
        { subtitle } 
    </p>
  )
};

export { Subtitle };