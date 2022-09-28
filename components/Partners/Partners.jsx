import React from 'react';
import image from "../../public/images/partners-image.png";
import styles from "./Partners.module.scss";

const Partners = () => {
  return (
    <div
      className={styles.partners}
    >
      <h2>
        Наши партнеры
      </h2>
      <img 
        src={image}
        alt="Partners"
      />
    </div>
  )
}

export { Partners };